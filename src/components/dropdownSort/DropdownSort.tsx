import { useState } from 'react'
import arrowImage from '../../images/arrow.svg'
import priceTag from '../../images/priceTag.svg'
import miniMenu from '../../images/miniMenu.svg'
import { Transition } from 'react-transition-group'
import './dropdownSort.css'

const DropdownSort: React.FC = () => {
    const [open, setOpen] = useState<boolean>(false)
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
    return (
        <li className='sortDropdown' onClick={() => setOpen(!open)}>
            <p className='sortDropdown-text'>Price</p>
            <img className='sortDropdown-image' src={arrowImage} alt="" />

            <Transition in={open} timeout={duration}>
                {state => (
                    <div style={{
                        ...defaultStyle,
                        ...transitionStyles[state]
                    }} onClick={e => e.stopPropagation()} className='dropdownSort'>
                        <div className='union'>
                            <button className='btn' onClick={() => setOpen(false)}>Lower to bigger</button>
                            <img src={priceTag} alt="" />
                        </div>
                        <div className='union'>
                            <button className='btn' onClick={() => setOpen(false)}>Bigger to lower</button>
                            <img src={miniMenu} alt="" />
                        </div>
                    </div>
                )}
            </Transition>

        </li>
    )
}

export default DropdownSort