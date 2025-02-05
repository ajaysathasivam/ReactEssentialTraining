import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { UserPage } from './Formik/UserPage.jsx'
import AdminPage from './Formik/AdminPage.jsx'
import CreateUserPage from './Formik/CreateUserPage.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>

        <Route path='/' element={<App />} />
        <Route path='/user' element={<UserPage/>}/>
        <Route path='/admin/dashboard' element={<AdminPage/>}/>
        <Route path='/newuser' element={<CreateUserPage/>}/>
      </Routes>


    </BrowserRouter>
  </StrictMode>,
)
