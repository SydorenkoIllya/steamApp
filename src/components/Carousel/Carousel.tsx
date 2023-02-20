import { useEffect, useState } from 'react'
import './carousel.css'
import { pageChanged, setMinusCount, setMinusOffset, setPlusCount, setPlusOffset } from './carouselSlice'
import { useDispatch } from 'react-redux'
import { useAppSelector } from '../../hooks/typedHooks'

const Carousel: React.FC = () => {

    // const [count, setCount] = useState<number>(1)
    const [pages, setPages] = useState<number>(0)
    const dispatch = useDispatch()
    const count = useAppSelector(state => state.pages.count)
    const globalStateGames = useAppSelector(state => state.games.gamesList)
    const offset = useAppSelector(state => state.pages.offset)

    const searchValue = useAppSelector(state => state.games.searchText)
    //25                //25                    // 4
    const globalStateGamesFiltered = globalStateGames.filter(i => {
        return i.title.toLowerCase().includes(searchValue.toLocaleLowerCase())
    })

    const numss = globalStateGamesFiltered.slice(0, (globalStateGamesFiltered.length - (globalStateGamesFiltered.length - Math.ceil((globalStateGamesFiltered.length / 8)))))
    const isLiked = useAppSelector(state => state.games.showLiked)

    const LGames = globalStateGames.filter(i => i.isLiked).filter(i => {
        return i.title.toLowerCase().includes(searchValue.toLocaleLowerCase())
    })
    const likedNums = LGames.slice(0, (LGames.length - (LGames.length - Math.ceil((LGames.length / 8)))))
    console.log('render');

    useEffect(() => {
        isLiked ? setPages(Math.ceil(likedNums.length / 3)) : setPages(Math.ceil(numss.length / 3))

    }, [numss, isLiked, likedNums])



    const handleLeftArrowClick = () => {
        if (offset === 0) return
        dispatch(setMinusCount())
        dispatch(setMinusOffset())
    }

    const handleRightArrowClick = () => {
        if (count < pages) {
            console.log('clicked');
            dispatch(setPlusCount())
            dispatch(setPlusOffset())
        }

    }

    return (
        <>
            <button onClick={handleLeftArrowClick} className='arrow' />
            <div className='visibleWindow'>
                <div className='btns-list' style={{ transform: `translateX(-${offset}px)` }}>
                    {isLiked ? likedNums.map(((i, index) => (
                        <button onClick={() => dispatch(pageChanged(index + 1))} key={i.appId} className='btn-pages'>{index + 1}</button>
                    ))) : numss.map(((i, index) => (
                        <button onClick={() => dispatch(pageChanged(index + 1))} key={i.appId} className='btn-pages'>{index + 1}</button>
                    )))}
                </div>
            </div>
            <button onClick={handleRightArrowClick} className='arrow arrow-next' />
        </>
    )
}



export default Carousel