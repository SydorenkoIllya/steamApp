import { useAppDispatch } from '../../hooks/typedHooks';
import Carousel from '../Carousel/Carousel';
import GamesList from '../GamesList/GamesList';
import Navbar from '../navbar/Navbar';
import './App.css';
import { changeClickElem } from './appSlice';

function App() {
  const dispatch = useAppDispatch()
  return (
    <>
      <main onClick={e => dispatch(changeClickElem(e.target))} className="container">
        <Navbar />
        <GamesList />
        <div className='pagination-wrapper'>
          <div className='pagination'>
            <Carousel />
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
