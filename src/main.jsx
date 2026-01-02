import React from 'react'
import ReactDOM from 'react-dom/client'
import { FormspreeProvider } from '@formspree/react'
import App from './App.jsx'
import './index.css' 

import '@fontsource/fira-code/300.css';
import '@fontsource/fira-code/500.css';
import '@fontsource/inter/300.css';
import '@fontsource/inter/600.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <FormspreeProvider>
      <App />
    </FormspreeProvider>
  </React.StrictMode>,
)