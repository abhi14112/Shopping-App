import React from 'react'
import Header from './components/Header';
import Home from './components/Home';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Checkout from './components/Checkout';
import { Provider } from 'react-redux';
import store from './Redux/store';
const App = () => {
  return (
    <Provider store={store}>
    <BrowserRouter>
        <Header/>
      <Routes>
        <Route path='/' element={<Home/>}>
        </Route>
        <Route path='/checkout' element={<Checkout/>}/>
      </Routes>
    </BrowserRouter>
    </Provider>
  )
}
export default App;