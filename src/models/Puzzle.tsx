type PuzzleBase = {
    id: number,
    question: string,
    hint?: string,
    answers: string[]
    penalty?: number
}

type OpenPuzzle = PuzzleBase & {
    answerType: "open"
}

type MultipleChoicePuzzle = PuzzleBase & {
    answerType: "multiple_choice",
    inputType: "radio" | "checkbox",
    options: string[]
}

export type Puzzle = OpenPuzzle | MultipleChoicePuzzle