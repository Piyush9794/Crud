import { Routes, Route } from 'react-router-dom'
import Home from './Components/Home'
import View from './Components/View'
import Edit from './Components/Edit'
import Navbar from './Components/Navbar'
import './App.css'
import Login from './Components/Login'
import Pagination from './Components/Pagination'
// import { ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
function App() {

  return (
    <>
<Navbar />
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/home' element={<Home />} />
        <Route path='/view' element={<View />} />
        <Route path='/edit/:id' element={<Edit />} />
        <Route path='/pagination' element={<Pagination />} />
         {/* <ToastContainer position="top-right" autoClose={2000} /> */}
      </Routes>



    </>
  )
}

export default App
