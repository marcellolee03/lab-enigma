import { useContext, createContext } from "react"
import type { Puzzle } from "../models/Puzzle"


export interface PuzzleContextType {
    getCurrentPuzzle: () => Puzzle,
    moveToNextPuzzle: () => void,
    getRemainingTime: () => number,
    applyPenalty: (penalty: number) => void
}

export const PuzzleContext = createContext<PuzzleContextType | undefined>(undefined)

export function usePuzzleContext(): PuzzleContextType {
    
    const context = useContext(PuzzleContext)

    if (context === undefined) {
        throw new Error('usePuzzleContext deve ser usado dentro de um PuzzleProvider')
    }
    
    return context
}