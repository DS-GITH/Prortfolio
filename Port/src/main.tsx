import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Home from './Pages/Home.tsx'
import Header from './components/header.tsx'
import Skills from './components/skills.tsx'
import Project from './components/projects.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Header/>
    <Home />
    <Skills />
    <Project/>
  </StrictMode>,
)
