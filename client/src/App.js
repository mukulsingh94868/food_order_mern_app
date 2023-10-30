import './App.css';
import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import HomeScreen from './screens/HomeScreen';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import CartScreen from './screens/CartScreen';

function App() {
  return (
    <div className="App">
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path='/' exact element={<HomeScreen />} />
          <Route path='/cart' exact element={<CartScreen />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
