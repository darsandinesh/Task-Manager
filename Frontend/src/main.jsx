import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { ToastContainer, Zoom } from 'react-toastify';
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop
          closeOnClick={false}
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
          transition={Zoom}
        />
    <App />
  </StrictMode>,
)
