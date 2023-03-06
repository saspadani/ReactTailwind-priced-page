import Header from './components/Header';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className='bg-gradient-to-tr from-blue4-bag to-blue-bag'>
      <div className='w-[1140px] mx-auto py-14'>
        <NavBar />
        <Header />
        <div>priced</div>
      </div>
    </div>
  );
}

export default App;
