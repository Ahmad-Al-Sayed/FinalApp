import { Route, Routes } from 'react-router-dom';
import About from './About';
import './App.css';
import Home from './Home';
import NavBar from './NavBar';
import Search from './Search';

function App() {
  return (
    <div className="App">
    <NavBar/>
      <Routes>
        <Route path='/' element=<Home/>></Route>
        <Route path='About/:id' element=<About/>></Route>
        <Route path='Search/' element=<Search/>></Route>
      </Routes>
    </div>
  );
}

export default App;
