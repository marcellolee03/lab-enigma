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

type EnigmaTypePuzzle = {
    answerType: "special",

    id: number

    hint: string
    first_question: string
    first_answer: string

    second_question: string
    second_answer: string

    penalty?: number
}

export type Puzzle = OpenPuzzle | MultipleChoicePuzzle | EnigmaTypePuzzle