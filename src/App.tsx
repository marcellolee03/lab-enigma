import { MultipleChoicePuzzleDisplay } from "./components/MultipleChoicePuzzleDisplay"
import { OpenPuzzleDisplay } from "./components/OpenPuzzleDisplay"
import { usePuzzleContext } from "./context/usePuzzleContext"


function App() {
  
  const { getCurrentPuzzle } = usePuzzleContext()

  return (
    <>
      {getCurrentPuzzle().answerType === "multiple_choice"
      ? <MultipleChoicePuzzleDisplay puzzle = {getCurrentPuzzle()} />
      : <OpenPuzzleDisplay puzzle = {getCurrentPuzzle()}/>
      }
    </>
  )
}

export default App
