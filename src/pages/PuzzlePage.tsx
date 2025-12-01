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
        <>
          <CountdownTimer />
          <EnigmaPuzzleDisplay puzzle={currentPuzzle} />
        </>
      )

    } else {

      return (
      <>
        <CountdownTimer />
        <PuzzleDisplay puzzle={currentPuzzle} />
      </>
      )
      
    }
}