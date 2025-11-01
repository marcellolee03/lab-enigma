import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { PuzzleProvider } from './context/PuzzleContextProvider.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <PuzzleProvider>
      <App />
    </PuzzleProvider>
  </StrictMode>,
)
