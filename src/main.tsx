import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.tsx'
import { PuzzleProvider } from './context/PuzzleContextProvider.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <PuzzleProvider>
        <App />
      </PuzzleProvider>
    </BrowserRouter>
  </StrictMode>,
)
