import { MultipleChoicePuzzleDisplay } from "./components/MultipleChoicePuzzleDisplay"
import { OpenPuzzleDisplay } from "./components/OpenPuzzleDisplay"
import type { Puzzle } from "./models/puzzle"
import { useState } from "react"


function App() {
  
  const Puzzles: Puzzle[] = [
    {
      id: 2,
      question: "hello",
      answerType: "multiple_choice",
      answer: "world",
      options: ["world", "el mundooo"]
    },
    
    {
      id: 1,
      question: "hello",
      answerType: "open",
      answer: "world",
    },
  ]

  const [ currentPuzzle, setCurrentPuzzle] = useState<Puzzle>(Puzzles[0])

  return (
    <>
      {currentPuzzle.answerType === "multiple_choice"
        ? <MultipleChoicePuzzleDisplay puzzle = {currentPuzzle} />
        : <OpenPuzzleDisplay puzzle = {currentPuzzle}/>
      }
    </>
  )
}

export default App
