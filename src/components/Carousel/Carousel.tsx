import { useEffect, useState } from 'react'
import './carousel.css'
import { useHttp } from '../../hooks/httpHook'




const Carousel: React.FC = () => {

    const [offset, setOffset] = useState<number>(0)
    const [count, setCount] = useState<number>(1)
    const [pages, setPages] = useState<number>(0)

    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '3eacbfc688msh7a78712d81522b8p1f5170jsn6af9e54d8b39',
            'X-RapidAPI-Host': 'steam2.p.rapidapi.com'
        }
    };


    useEffect(() => {

        // fetch('https://steam2.p.rapidapi.com/search/Counter/page/1', options)
        //     .then(response => response.json())
        //     .then(response => console.log(response))
        //     .catch(err => console.error(err));
        setPages(scrollsCount())
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    const scrollsCount = () => {
        const count = Math.ceil(nums.length / 3)
        return count
    }

    const { request } = useHttp()


    console.log('render');
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
                    {nums.map((i => (
                        <button key={i} className='btn-pages'>{i}</button>
                    )))}
                </div>
            </div>
            <button onClick={handleRightArrowClick} className='arrow arrow-next' />
        </>
    )
}



export default Carousel