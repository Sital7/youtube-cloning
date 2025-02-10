// youtube clone
import React, { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Video from './pages/Video/Video'

const App=() =>{

  const [sidebar, setSidebar] = useState(true)


  return (
    <div>
      <Navbar setSidebar={setSidebar} />
      <Routes>
        <Route path='/' element={<Home sidebar={sidebar} />} />
        <Route path='/video/:categoryId/:videoId' element={<Video />} />
      </Routes>
    </div>
  )
}
export default (App)





// Card

// import Card from "./components/Card";
// import APICall from './components/ApiCall';


// const App = () => {
//   return (
//     // <div>
//     //   <Card />
//     // </div>
//     <div>
//     <APICall />
//     </div>
//   )
// }

// export default App

