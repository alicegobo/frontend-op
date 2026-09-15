import { Navigate, Route, Routes } from 'react-router-dom'
import ArquivosHartmann from './pages/home/home.jsx'
import './App.css'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" replace />} />
      <Route path="/home" element={<ArquivosHartmann />} />
      <Route path="*" element={<Navigate to="/home" replace />} />
    </Routes>
  )
}

export default App
