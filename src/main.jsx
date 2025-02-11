// this is also correct
// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'
// import { BrowserRouter } from 'react-router-dom'

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <BrowserRouter>
//     <App />
//     </BrowserRouter>
//   </StrictMode>,
// )



// yt ko manxe ko jasto code

import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter><App /></BrowserRouter>
    
  </React.StrictMode>,
)
