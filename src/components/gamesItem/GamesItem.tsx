import { useAppDispatch, useAppSelector } from "../../hooks/typedHooks"
import { addLiked, removeLiked, uploadData } from "../GamesList/gamesSlice"
import heart from '../../images/heart.svg'
import redHeart from '../../images/redHeart.svg'
import './gamesItem.css'
// import { useState } from "react"
import playCircle from '../../images/playCircle.svg'

interface IPost {
    appId: string,
    title: string,
    url: string,
    imgUrl: string,
    released: string,
    reviewSummary: string,
    price: string,
    isLiked: boolean
}

interface IProps {
    item: IPost,
}

const GamesItem: React.FC<IProps> = ({ item }) => {
    // const [liked, setLiked] = useState<boolean>(false)
    const globalGamesState = useAppSelector(state => state.games.gamesList)
    const dispatch = useAppDispatch()
    const toggleLiked = (heroToUpdate: any, boolean: boolean) => globalGamesState.map((i) => {
        if (i === heroToUpdate) {
            return {
                ...i,
                isLiked: boolean
            }
        } else {
            return i
        }
    })

    const handleClick = (heroToUpdate: IPost) => {
        if (item.isLiked) {
            dispatch(uploadData(toggleLiked(heroToUpdate, false)))
        } else {
            dispatch(uploadData(globalGamesState.map((i) => {
                if (i === heroToUpdate) {
                    return {
                        ...i,
                        isLiked: true
                    }
                } else {
                    return i
                }
            })))
        }
        console.log(item);
    }
    console.log('render');

    return (
        <div className='games-item'>
            <img className='games-img' src={item.imgUrl} alt="img" />
            {item.isLiked ? <img className="games-play" src={playCircle} alt='' /> : null}
            <div className='games-wrapper'>
                <div className='games-title'>{item.title}</div>
                <p className='games-released'>{item.released}</p>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <p className='games-price'>{item.price.trim() ? item.price : 'Price is not avaliable'}</p>
                    <img onClick={() => handleClick(item)} className='games-heart' src={item.isLiked ? redHeart : heart} alt="heartImg" />
                </div>
            </div>
        </div>
    )
}

export default GamesItem

