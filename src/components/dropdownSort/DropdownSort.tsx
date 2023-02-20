import { useEffect, useRef, useState } from 'react'
import arrowImage from '../../images/arrow.svg'
import priceTag from '../../images/priceTag.svg'
import miniMenu from '../../images/miniMenu.svg'
import { Transition } from 'react-transition-group'
import './dropdownSort.css'
import { useDispatch } from 'react-redux'
import { changeIsPrice, sortByPrice, sortByRelease } from '../GamesList/gamesSlice'
import { defaulSetForFilters } from '../Carousel/carouselSlice'
import { useAppSelector } from '../../hooks/typedHooks'

const DropdownSort: React.FC = () => {
    const [open, setOpen] = useState<boolean>(false)
    const dispatch = useDispatch()
    const duration = 300;

    const defaultStyle = {
        transition: `all ${duration}ms ease-in-out`,
        opacity: 0,
        visibility: 'hidden'
    }

    interface ItransitionStyles {
        [key: string]: any
    }

    const transitionStyles: ItransitionStyles = {
        entering: { opacity: 1, visibility: 'visible' },
        entered: { opacity: 1, visibility: 'visible' },
        exiting: { opacity: 0, visibility: 'hidden' },
        exited: { opacity: 0, visibility: 'hidden' },
    };
    const handlePriceClick = () => {
        setOpen(false)
        dispatch(defaulSetForFilters(1))
        dispatch(sortByPrice(1))
        dispatch(changeIsPrice(true))
    }

    const handlePublishDateClick = () => {
        setOpen(false)
        dispatch(sortByRelease(-1))
        dispatch(changeIsPrice(false))
        dispatch(defaulSetForFilters(1))
    }

    const ref = useRef(null)
    const elem = useAppSelector(state => state.app.clickElem)

    useEffect(() => {
        if (elem !== ref.current) {
            setOpen(false)
        }
    }, [elem])
    const openSort = () => {
        if (open) {
            setOpen(false)
        } else {
            setOpen(true)
        }

    }
    return (
        <li ref={ref} className='sortDropdown' onClick={openSort}>
            <p className='sortDropdown-text'>Filter</p>
            <img className='sortDropdown-image' src={arrowImage} alt="" />

            <Transition in={open} timeout={duration}>
                {state => (
                    <div style={{
                        ...defaultStyle,
                        ...transitionStyles[state]
                    }} onClick={e => e.stopPropagation()} className='dropdownSort'>
                        <div className='union'>
                            <button className='btn' onClick={handlePriceClick}>Price</button>
                            <img src={priceTag} alt="" />
                        </div>
                        <div className='union'>
                            <button className='btn' onClick={handlePublishDateClick}>Publish date</button>
                            <img src={miniMenu} alt="" />
                        </div>
                    </div>
                )}
            </Transition>

        </li>
    )
}

export default DropdownSort