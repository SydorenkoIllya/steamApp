import Carousel from '../Carousel/Carousel';
import GamesList from '../GamesList/GamesList';
import Navbar from '../navbar/Navbar';
import './App.css';

function App() {
  return (
    <>
      <main className="container">
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
