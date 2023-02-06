import { useAppSelector } from '../../hooks/typedHooks'
import { useGetGamesQuery } from '../../api/apiSlice'
import './gamesList.css'

const GamesList: React.FC = () => {

    const pageNumber = useAppSelector(state => state.pages.currentPage)


    const {data: heroesList = [], isLoading} = useGetGamesQuery('')
    if(isLoading) {
        return <p> Loading</p>
    }

    const heroes = heroesList.slice((pageNumber - 1) * 8, pageNumber * 8)
    return (
        <div className="games-list">
           {heroes.map((item, index) => (
            <div key={index} className='games-item'>{item.price}</div>
           ))}
        </div>
    )
}

export default GamesList