import { useAppSelector } from '../../hooks/typedHooks'
import './gamesList.css'
import GamesItem from '../gamesItem/GamesItem'
import uuid4 from 'uuid4'
import { useEffect, useState } from 'react'
import { useHttp } from '../../hooks/httpHook'
import { uploadData } from './gamesSlice'
import { useDispatch } from 'react-redux'




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


const GamesList: React.FC = () => {
    const pageNumber = useAppSelector(state => state.pages.currentPage)

    const isLiked = useAppSelector(state => state.games.showLiked)

    const globalStateGames = useAppSelector(state => state.games.gamesList)

    const searchValue = useAppSelector(state => state.games.searchText)
    const { request } = useHttp();
    const [newGames, setNewGames] = useState<IPost[]>([])

    const dispatch = useDispatch()

    // useEffect(() => {
    //     window.localStorage.setItem('GAMES_ARR', JSON.stringify(newGames))
    // }, [newGames])

    useEffect(() => {
        const getData = async () => {
            const payload = await request('https://steam2.p.rapidapi.com/search/Counter/page/1', 'GET', null, {
                'X-RapidAPI-Key': '3eacbfc688msh7a78712d81522b8p1f5170jsn6af9e54d8b39',
                'X-RapidAPI-Host': 'steam2.p.rapidapi.com'
            });
            const payloadWithIds = payload.map((item: any) => {
                if (item.appId === undefined) {
                    return {
                        ...item,
                        appId: uuid4(),
                        isLiked: false
                    }
                } else {
                    return {
                        ...item,
                        isLiked: false
                    }
                }
            })
            setNewGames(payloadWithIds);
        }
        getData()
        //eslint-disable-next-line
    }, [])

    useEffect(() => {
        dispatch(uploadData(newGames))
        //eslint-disable-next-line
    }, [newGames])

    // console.log(newGames);
    console.log(globalStateGames);
    const games = globalStateGames.filter(i => {
        return i.title.toLowerCase().includes(searchValue.toLocaleLowerCase())
    }).slice((pageNumber - 1) * 8, pageNumber * 8)


    const LGames = globalStateGames.filter(i => i.isLiked).filter(i => {
        return i.title.toLowerCase().includes(searchValue.toLocaleLowerCase())
    })
    const likedGames = LGames.slice((pageNumber - 1) * 8, pageNumber * 8)


    return (
        <div className="games-list">
            {isLiked ? likedGames.map((item: any) => (
                <GamesItem key={item.appId} item={item} />
            ))
                : games.map((item) => (
                    <GamesItem key={item.appId} item={item} />
                ))}
        </div>
    )
}

export default GamesList