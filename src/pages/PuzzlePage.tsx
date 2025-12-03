import { type Puzzle } from "../models/Puzzle"
import { CountdownTimer } from "../components/CountdownTimer"
import { usePuzzleContext } from "../context/PuzzleContext";
import { PuzzleDisplay } from "../components/puzzleDisplays/PuzzleDisplay";
import { EnigmaPuzzleDisplay } from "../components/puzzleDisplays/EnigmaPuzzleDisplay";

export function PuzzlePage(){
    const { getCurrentPuzzle } = usePuzzleContext()
    const currentPuzzle: Puzzle = getCurrentPuzzle()

    if (currentPuzzle.answerType === "enigma"){

      return (
        <div className="grid place-items-center h-screen">
          <div>
            <CountdownTimer />
            <EnigmaPuzzleDisplay puzzle={currentPuzzle} />
          </div>
        </div>
      )

    } else {

      return (
      <div className="grid place-items-center h-screen">
        <div>
          <CountdownTimer />
          <PuzzleDisplay puzzle={currentPuzzle} />
        </div>
      </div>
      )
      
    }
}