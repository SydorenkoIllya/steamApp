import { useAppDispatch } from '../../hooks/typedHooks'
import { changeSearchText } from '../GamesList/gamesSlice'
import './searchBar.css'

const GamesSearch: React.FC = () => {
    const dispatch = useAppDispatch()
    const handleInput = (value: string) => {
        dispatch(changeSearchText(value))
    }
    return (
        <input onChange={(e) => handleInput(e.target.value)} placeholder='Enter app name...' className='search' type="text" />
    )
}

export default GamesSearch