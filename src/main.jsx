import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App'
import './index.css'

import {Provider}  from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

import { store } from './store'

const isTrue = false;
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

      <Provider store={store}>

        <BrowserRouter>
        
          <main data-theme={isTrue ? 'dark' : 'light'} className=' h-screen font-OpenSans'>
            <App />
          </main>
        
        </BrowserRouter>

      </Provider>
      
  </React.StrictMode>
)
