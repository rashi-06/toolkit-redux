import React from 'react'
import './App.css'
import Navbar from './components/Navbar'
import { BrowserRouter as Router , Routes , Route} from 'react-router-dom'
import Products from './components/Products'
import Cart from './components/Cart'


const App = () => {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path ='/products' element={<Products/>}></Route>
        <Route path='/cart' element={<Cart/>}></Route>
      </Routes>
     
    
    </Router>
   

  )
}

export default App