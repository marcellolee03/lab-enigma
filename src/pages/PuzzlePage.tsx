import { type Puzzle } from "../models/Puzzle"
import { CountdownTimer } from "../components/CountdownTimer"
import { OpenPuzzleDisplay } from "../components/puzzleDisplays/OpenAnswerDisplay"
import { usePuzzleContext } from "../context/PuzzleContext";
import { CheckAnswerDisplay } from "../components/puzzleDisplays/CheckAnswerDisplay"
import { RadioAnswerDisplay } from "../components/puzzleDisplays/RadioAnswerDisplay"
import { CarouselCard } from "../components/CarouselCard";

export function PuzzlePage(){
    const { getCurrentPuzzle } = usePuzzleContext()
    const currentPuzzle: Puzzle = getCurrentPuzzle()

    if (currentPuzzle.answerType === "open") {
        return (
          <>
            <CountdownTimer />
            <OpenPuzzleDisplay puzzle = {currentPuzzle} />
          </>
        )
      } else if (currentPuzzle.answerType === "special") {
        return (
          <>
            <CountdownTimer/>
            <CarouselCard puzzle = {currentPuzzle} />
          </>
        )
      } else {
        if (currentPuzzle.inputType === "checkbox"){
          return (
            <>
              <CountdownTimer />
              <CheckAnswerDisplay puzzle = {currentPuzzle} />
            </>
          )
        } else {
          return (
            <>
              <CountdownTimer />
              <RadioAnswerDisplay puzzle = {currentPuzzle} />
            </>
          )
        }
    
    }
}