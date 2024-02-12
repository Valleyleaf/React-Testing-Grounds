import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Footer from './assets/components/Footer/Footer.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    
    <div className='ForceFooterBottom'>
      <Footer/>
    </div>
  </React.StrictMode>,
)
