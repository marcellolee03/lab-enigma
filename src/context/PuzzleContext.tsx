import { type ReactNode } from "react";
import { puzzles } from "../data/data";
import type { Puzzle } from "../models/Puzzle";
import { useState, createContext, useContext } from "react";
import { useNavigate } from "react-router-dom";

// CONTEXT and USE CONTEXT
// Setting Context Type. Essentially, what the provider will provide.
interface PuzzleContextType {
    getCurrentPuzzle: () => Puzzle,
    moveToNextPuzzle: () => void,
}

export const PuzzleContext = createContext<PuzzleContextType | undefined>(undefined)

export function usePuzzleContext(): PuzzleContextType {
    const context = useContext(PuzzleContext)
    if (context === undefined) {
        throw new Error('usePuzzleContext deve ser usado dentro de um PuzzleProvider')
    }
    return context
}

// CONTEXT PROVIDER
// Setting props for the Context Provider
interface PuzzleProviderProps {
    children: ReactNode
}

// Context provider. Attributes and methods accessible through useContext
export function PuzzleProvider({ children }: PuzzleProviderProps) {

    const [ currentPuzzleIndex, setCurrentPuzzleIndex ] = useState<number>(0)
    const currentPuzzle: Puzzle = puzzles[currentPuzzleIndex]

    const navigate = useNavigate();

    function getCurrentPuzzle () {
        return currentPuzzle
    }

    function moveToNextPuzzle() {
        if ((currentPuzzleIndex + 1) >= puzzles.length) {
            navigate("/success", { replace: true });
        } else {
            setCurrentPuzzleIndex(prev => prev + 1)
        }
    }

    return (
        <PuzzleContext.Provider
            value={{
                getCurrentPuzzle,
                moveToNextPuzzle,
            }}
        >
            {children}
        </PuzzleContext.Provider>
    )
}

