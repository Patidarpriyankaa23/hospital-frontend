import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { AuthProvider } from './Context/authContext.jsx'
import { DoctorAuthProvider } from './Context/DrContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <DoctorAuthProvider>
        <App />
      </DoctorAuthProvider>
    </AuthProvider>
  </StrictMode>
)
