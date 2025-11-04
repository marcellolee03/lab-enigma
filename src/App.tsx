import CountdownTimer from "./components/CountdownTimer"
import { CheckAnswerDisplay } from "./components/puzzleDisplays/CheckAnswerDisplay"
import { OpenPuzzleDisplay } from "./components/puzzleDisplays/OpenAnswerDisplay"
import { RadioAnswerDisplay } from "./components/puzzleDisplays/RadioAnswerDisplay"
import { usePuzzleContext } from "./context/usePuzzleContext"


function App() {
  
  const { getCurrentPuzzle } = usePuzzleContext()
  const currentPuzzle = getCurrentPuzzle()

  if (currentPuzzle.answerType === "open") {
    return (
      <>
        <CountdownTimer/>
        <OpenPuzzleDisplay puzzle = {currentPuzzle} />
      </>
    )
  } else {
    if (currentPuzzle.inputType === "checkbox"){
      return (
        <>
          <CheckAnswerDisplay puzzle = {currentPuzzle} />
        </>
      )
    } else {
      return (
        <>
          <RadioAnswerDisplay puzzle = {currentPuzzle} />
        </>
      )
    }

  }
}

export default App
