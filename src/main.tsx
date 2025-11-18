import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.tsx'
import { PuzzleProvider } from './context/PuzzleContext.tsx'
import { TimerProvider } from './context/TimerContext.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <TimerProvider>
        <PuzzleProvider>
          <App />
        </PuzzleProvider>
      </TimerProvider>
    </BrowserRouter>
  </StrictMode>,
)
