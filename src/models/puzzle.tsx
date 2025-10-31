type PuzzleBase = {
    id: number,
    question: string,
    hint?: string,
    answer: string
}

type OpenPuzzle = PuzzleBase & {
    answerType: "open"
}

type MultipleChoicePuzzle = PuzzleBase & {
    answerType: "multiple_choice",
    options: string[]
}

export type Puzzle = OpenPuzzle | MultipleChoicePuzzle