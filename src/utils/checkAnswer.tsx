import { type Puzzle } from "../models/Puzzle"

export function checkAnswer(input:string, puzzle: Puzzle) {

    if (input.toLowerCase().replaceAll(" ", "") === puzzle.answer.toLowerCase()) {
        console.log("right!")
        return true
    } else {
        return false
    }
}