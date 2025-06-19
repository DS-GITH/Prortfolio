import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Home from './Pages/Home.tsx'
import Header from './components/header.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Header/>
    <Home />
  </StrictMode>,
)
