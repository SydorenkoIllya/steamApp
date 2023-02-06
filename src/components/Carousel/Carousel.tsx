import { useEffect, useState } from 'react'
import './carousel.css'
import { pageChanged } from './carouselSlice'
import { useDispatch } from 'react-redux'
import { useGetGamesQuery } from '../../api/apiSlice'




const Carousel: React.FC = () => {

    const [offset, setOffset] = useState<number>(0)
    const [count, setCount] = useState<number>(1)
    const [pages, setPages] = useState<number>(0)
    const dispatch = useDispatch()



    const {data: heroes = []} = useGetGamesQuery('')
                                        //25                //25                    // 4
    const numss = heroes.slice(0, (heroes.length - (heroes.length  - Math.ceil((heroes.length / 8))))) 
    console.log('render');
    
    useEffect(() => {
        setPages(Math.ceil(numss.length / 3))      
    }, [numss])


    const handleLeftArrowClick = () => {
        if (offset === 0) return
        setCount(count - 1)
        setOffset(offset - 108)
    }

    const handleRightArrowClick = () => {

        if (count < pages) {
            setCount(count + 1)
            setOffset(offset + 108)
        }

    }

    return (
        <>
            <button onClick={handleLeftArrowClick} className='arrow' />
            <div className='visibleWindow'>
                <div className='btns-list' style={{ transform: `translateX(-${offset}px)` }}>
                    {numss.map(((i, index) => (
                        <button onClick={() => dispatch(pageChanged(index + 1))} key={i.appId} className='btn-pages'>{index + 1}</button>
                    )))}
                </div>
            </div>
            <button onClick={handleRightArrowClick} className='arrow arrow-next' />
        </>
    )
}



export default Carousel