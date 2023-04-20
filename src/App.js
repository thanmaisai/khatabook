import './App.css';
import Header from './components/Header';
import Home  from '../src/pages/Home'
import Login  from '../src/pages/Login'
import Register  from '../src/pages/Register'
import { BrowserRouter, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Header>
            <BrowserRouter>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/login' element={<Login/>}></Route>
            <Route path='/register' element={<Register/>}></Route>
            </BrowserRouter>
      </Header>
    </>
  );
}

export default App;
