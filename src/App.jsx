import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from './components/Navbar'
import Register from './screens/Register'
import PageNotFound from './screens/PageNotFound'
import Login from './screens/Login'
import RaiseComplain from './screens/RaiseComplain'
import AllComplaints from './screens/AllComplaints'
import ComplaintDetails from './screens/ComplaintDetails'
import Home from './screens/Home'

const App = () => {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path='*' element={<PageNotFound/>}/>
        <Route path='/' element={<Home/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/auth/new' element={<RaiseComplain/>}/>
        <Route path='/auth/all' element={<AllComplaints/>}/>
        <Route path='/auth/complaint/:id' element={<ComplaintDetails/>}/>
      </Routes>
      <ToastContainer/>
    </Router>
  )
}

export default App;