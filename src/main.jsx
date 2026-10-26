import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Approute from './routes/Approute.jsx'
import { AuthProvider } from './context/Authcontext.jsx'
  import { ToastContainer } from 'react-toastify';
import { ConstextProvider } from './context/MyContext.jsx'
createRoot(document.getElementById('root')).render(
   <AuthProvider>
    <ConstextProvider>
    <Approute/>
    </ConstextProvider>
     <ToastContainer/>
   </AuthProvider>
)
