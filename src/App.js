import React from 'react'
import './App.css'
import { Provider } from 'react-redux'
import store from './store/store'
import Navbar from './components/Navbar'
import { BrowserRouter as Router , Routes , Route} from 'react-router-dom'
import Products from './components/Products'
import Cart from './components/Cart'


const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Navbar/>
        <Routes>
          <Route path ='/products' element={<Products/>}></Route>
          <Route path='/cart' element={<Cart/>}></Route>
        </Routes>    
      </Router>
      </Provider>

  )
}

export default App