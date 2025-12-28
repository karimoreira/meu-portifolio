import React from 'react'
import ReactDOM from 'react-dom/client'
import { FormspreeProvider } from '@formspree/react'
import App from './App.jsx'
import './index.css' 

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <FormspreeProvider>
      <App />
    </FormspreeProvider>
  </React.StrictMode>,
)