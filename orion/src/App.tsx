import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { LoginPage } from './features/auth/pages/LoginPage'
import { SignupPage } from './features/auth/pages/SignupPage'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/cadastro" element={<SignupPage />} />
      </Routes>
    </BrowserRouter>
  )
}