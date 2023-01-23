import './App.css'
import Sidebar from './Components/sidebar/Sidebar';
import {BrowserRouter ,Route, Routes } from "react-router-dom"
import Explore from './Components/Explore';
import Home from './Components/Home/Home';


function App() {

  return (
    <BrowserRouter>
    <Sidebar/>
    <Routes>
      <Route path='/' element={<Home/>} ></Route>
      <Route path='/explore' element={<Explore/>} ></Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App
