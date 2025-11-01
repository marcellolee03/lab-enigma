import { type Puzzle } from "../models/puzzle"

export function checkAnswer(input:string, puzzle: Puzzle) {
    if (input.toLowerCase().replaceAll(" ", "") === puzzle.answer.toLowerCase()) {
        console.log("right!")
    } else {
        console.log("wrong!")
    }
}