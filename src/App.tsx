import { PuzzleDisplay } from "./components/PuzzleDisplay"
import type { Puzzle } from "./models/puzzle"


function App() {
  const dummy: Puzzle = {
    id: 1,
    question: "hello",
    answerType: "open",
    answer: "world"
  }

  return (
    <>
      <PuzzleDisplay 
        puzzle = {dummy}
      />
    </>
  )
}

export default App
