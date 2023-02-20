import { useAppDispatch } from '../../hooks/typedHooks'
import { defaulSetForFilters, } from '../Carousel/carouselSlice'
import { showLiked } from '../GamesList/gamesSlice'
import './buttonFilter.css'


const ButtonFilter: React.FC = () => {
    const dispatch = useAppDispatch()

    const handleClick = (bool: boolean) => {
        dispatch(showLiked(bool))
        dispatch(defaulSetForFilters(1))
    }
    return (
        <div className='twoButtons'>
            <button className='twoButtons-each' onClick={() => handleClick(false)}>Search</button>
            <button className='twoButtons-each' onClick={() => handleClick(true)}>Like list</button>
        </div>
    )
}

export default ButtonFilter