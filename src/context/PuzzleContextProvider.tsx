import { type ReactNode } from "react";
import { PuzzleContext } from "./usePuzzleContext";
import { puzzles } from "../data/data";
import type { Puzzle } from "../models/Puzzle";
import { useState } from "react";

interface PuzzleProviderProps {
    children: ReactNode
}

export function PuzzleProvider({ children }: PuzzleProviderProps) {

    const [ currentPuzzleIndex, setCurrentPuzzleIndex ] = useState<number>(0)
    const currentPuzzle: Puzzle = puzzles[currentPuzzleIndex]

    function hello () {
        console.log("hello!")
    }

    function getCurrentPuzzle () {
        return currentPuzzle
    }

    function moveToNextPuzzle() {
        setCurrentPuzzleIndex(prev => prev + 1)
    }

    return (
        <PuzzleContext.Provider
            value={{
                hello,
                getCurrentPuzzle,
                moveToNextPuzzle
            }}
        >
            {children}
        </PuzzleContext.Provider>
    )
}

