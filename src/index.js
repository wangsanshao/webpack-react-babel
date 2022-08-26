import React from 'react';
import { createRoot } from 'react-dom/client'

const App = () => {
  return <h1>这是一个h1</h1>
}
createRoot(document.getElementById('app')).render(<App />)