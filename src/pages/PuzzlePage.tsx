import { type Puzzle } from "../models/Puzzle"
import { CountdownTimer } from "../components/CountdownTimer"
import { usePuzzleContext } from "../context/PuzzleContext";
import { EnigmaCarousel } from "../components/puzzleDisplays/EnigmaCarousel/EnigmaCarousel";
import { PuzzleDisplay } from "../components/puzzleDisplays/PuzzleDisplay";

export function PuzzlePage(){
    const { getCurrentPuzzle } = usePuzzleContext()
    const currentPuzzle: Puzzle = getCurrentPuzzle()

    return (
      <>
        <CountdownTimer />
        <PuzzleDisplay puzzle={currentPuzzle} />
      </>
    )
}