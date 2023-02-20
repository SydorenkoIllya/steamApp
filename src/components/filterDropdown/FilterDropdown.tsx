import { useEffect, useRef, useState } from 'react'
import { useDispatch } from 'react-redux'
import { Transition } from 'react-transition-group'
import { useAppSelector } from '../../hooks/typedHooks'
import linesImage from '../../images/threeLines.svg'
import { defaulSetForFilters } from '../Carousel/carouselSlice'
import { sortByPrice, sortByRelease } from '../GamesList/gamesSlice'
import './filterDropdown.css'

const FilterDropdown: React.FC = () => {
    const [open, setOpen] = useState<boolean>(false)

    const dispatch = useDispatch()
    const price = useAppSelector(state => state.games.isPrise)
    console.log('render');

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

    const sortToBigger = () => {
        setOpen(false)
        dispatch(defaulSetForFilters(1))
        if (price) {
            dispatch(sortByPrice(1))
        } else {
            dispatch(sortByRelease(1))
        }
    }

    const sortToLower = () => {
        console.log(1);
        setOpen(false)
        dispatch(defaulSetForFilters(1))
        if (price) {
            dispatch(sortByPrice(-1))
        } else {
            dispatch(sortByRelease(-1))
        }
    }
    const ref = useRef(null)
    const elem = useAppSelector(state => state.app.clickElem)

    useEffect(() => {
        if (elem !== ref.current) {
            setOpen(false)
        }
    }, [elem])
    const openFilter = (e: any) => {
        if (open) {
            setOpen(false)
        } else {
            setOpen(true)
        }

    }



    return (
        <>
            <li className='filterDropdown'>
                <img ref={ref} onClick={(e) => openFilter(e)} className='filterDropdown-image' src={linesImage} alt="" />
                {/* {open && */}
                <Transition in={open} timeout={duration}>
                    {state => (
                        <div style={{
                            ...defaultStyle,
                            ...transitionStyles[state]
                        }} onClick={e => e.stopPropagation()} className='dropdown'>
                            <button className='btn-sort' onClick={sortToBigger}>Lower to bigger</button>
                            <button className='btn-sort' onClick={sortToLower}>Bigger to lower</button>
                        </div>
                    )}
                </Transition>
                {/* } */}
            </li>

        </>
    )
}

export default FilterDropdown;