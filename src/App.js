import './App.css';
import Header from './components/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import BuyTshirt from './components/BuyTshirt';
import Home from './components/Home';
import MagicSticks from './components/MagicSticks';
import Contact from './components/Contact';
import Cart from './components/Cart';


function App() {
  return (
    <div>
      <BrowserRouter>
      <Header />
        <Routes className="d-block">
          <Route  path='/' element={<Home />}></Route>
          <Route path='/Tshirt' element={<BuyTshirt />}></Route>
          <Route path='/MagicSticks' element={<MagicSticks />}></Route>
          <Route path='/Tshirt' element={<BuyTshirt />}></Route>
          <Route path='/Contact' element={<Contact />}></Route>
          <Route path='/Cart' element={<Cart />}></Route>


        </Routes>
      </BrowserRouter>


    </div>
  );
}

export default App;
