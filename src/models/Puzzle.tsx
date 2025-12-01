type PuzzleBase = {
    id: number,
    question?: string,
    hint?: string,
    answers: string[]
    penalty?: number
}

type OpenPuzzle = PuzzleBase & {
    answerType: "open"
}

type CheckboxPuzzle = PuzzleBase & {
    answerType: "checkbox",
    options: string[]
}

type RadioPuzzle = PuzzleBase & {
    answerType: "radio",
    options: string[]
}


export type EnigmaOption = {
    content: string,
    valid: boolean
}

type EnigmaPuzzle = PuzzleBase & {
    answerType: "enigma"

    first_row_options: EnigmaOption[]
    second_row_options: EnigmaOption[]
}

export type Puzzle = OpenPuzzle |  EnigmaPuzzle | CheckboxPuzzle | RadioPuzzle