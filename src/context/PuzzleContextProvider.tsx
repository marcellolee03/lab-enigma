import { type ReactNode } from "react";
import { PuzzleContext } from "./usePuzzleContext";
import { puzzles } from "../data/data";
import type { Puzzle } from "../models/Puzzle";
import { useState, useEffect } from "react";

interface PuzzleProviderProps {
    children: ReactNode
}

export function PuzzleProvider({ children }: PuzzleProviderProps) {

    const [ currentPuzzleIndex, setCurrentPuzzleIndex ] = useState<number>(0)
    const currentPuzzle: Puzzle = puzzles[currentPuzzleIndex]

    // Timer Logic
    const [ remainingTime, setRemainingTime ] = useState<number>(99999)
    useEffect(() => {
        if (remainingTime === 0) return

        const timer = setInterval(() => {
            setRemainingTime(prevRemainingTime => prevRemainingTime - 1)
        }, 1000)

        return () => clearInterval(timer)
    }, [remainingTime])


    function getCurrentPuzzle () {
        return currentPuzzle
    }

    function moveToNextPuzzle() {
        setCurrentPuzzleIndex(prev => prev + 1)
    }

    // Timer related functions
    function getRemainingTime () {
        return remainingTime
    }

    function applyPenalty(penalty: number){
        setRemainingTime(prevRemainingTime => prevRemainingTime - penalty)
    }

    return (
        <PuzzleContext.Provider
            value={{
                getCurrentPuzzle,
                moveToNextPuzzle,
                getRemainingTime,
                applyPenalty
            }}
        >
            {children}
        </PuzzleContext.Provider>
    )
}

