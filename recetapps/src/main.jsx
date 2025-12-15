import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import './index.css'

// Función para iniciar los mocks solo en desarrollo
async function enableMocking() {
  if (process.env.NODE_ENV !== 'development') {
    return
  }

  const { worker } = await import('./mocks/browser')

  // Inicia el worker y espera a que esté listo
  return worker.start({
    onUnhandledRequest: 'bypass', // Si hay una petición que no conocemos, déjala pasar
  })
}

const root = ReactDOM.createRoot(document.getElementById('root'));

// Iniciamos mocks y LUEGO renderizamos la app
enableMocking().then(() => {
  root.render(
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>
  )
})