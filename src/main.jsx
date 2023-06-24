import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

const isTrue = true;
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <main data-theme={isTrue ? 'dark' : 'light'} className=' h-screen font-OpenSans'>
      <App />
    </main>
  </React.StrictMode>,
)
