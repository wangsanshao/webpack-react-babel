import React from 'react';
import { createRoot } from 'react-dom/client'
import { HashRouter } from 'react-router-dom'
import App from './App'


const root = createRoot(document.getElementById('app'))
root.render(<React.StrictMode>
  <HashRouter>
    <App />
  </HashRouter>
</React.StrictMode>)