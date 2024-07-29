import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import IdComponent from './components/IdComponent.jsx'
import ProfilePage from './components/ProfilePage.jsx'
import Testimonials from './components/Testimonials.jsx'
import StartupPage from './components/StartupPage.jsx'
import CancelBookingsPage from './components/CancelBookingsPage.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
     <Route path="/:id" element={<IdComponent />} />
      {/* Your other routes go here */}
      <Route path="/" element={ <App />} />
      <Route path="/profile" element={ <ProfilePage />} />
      <Route path="/testimonials" element={ <Testimonials />} />
      <Route path="/calendar" element={ <Testimonials />} />
      <Route path="/startup" element={ <StartupPage />} />
      <Route path="/career" element={ <Testimonials />} />
      <Route path="/bank" element={ <Testimonials />} />
      <Route path="/earnings" element={ <Testimonials />} />
      <Route path="/cancelBookings" element={ <CancelBookingsPage />} />
    </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
