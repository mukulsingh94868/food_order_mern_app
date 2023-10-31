import './App.css';
import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import HomeScreen from './screens/HomeScreen';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import CartScreen from './screens/CartScreen';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';

function App() {
  return (
    <div className="App">
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path='/' exact element={<HomeScreen />} />
          <Route path='/cart' exact element={<CartScreen />} />
          <Route path='/register' exact element={<RegisterScreen />} />
          <Route path='/login' exact element={<LoginScreen />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
