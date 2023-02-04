import { useState } from 'react'
import { Transition } from 'react-transition-group'
import linesImage from '../../images/threeLines.svg'
import './filterDropdown.css'

const FilterDropdown: React.FC = () => {
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
        <>
            <li className='filterDropdown' onClick={() => setOpen(!open)}>
                <img className='filterDropdown-image' src={linesImage} alt="" />
                {/* {open && */}
                <Transition in={open} timeout={duration}>
                    {state => (
                        <div style={{
                            ...defaultStyle,
                            ...transitionStyles[state]
                        }} onClick={e => e.stopPropagation()} className='dropdown'>
                            <button className='btn-sort' onClick={() => setOpen(false)}>Lower to bigger</button>
                            <button className='btn-sort' onClick={() => setOpen(false)}>Bigger to lower</button>
                        </div>
                    )}
                </Transition>
                {/* } */}
            </li>

        </>
    )
}

export default FilterDropdown;