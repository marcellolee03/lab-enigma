import { type ReactNode } from "react"
import { useContext, createContext, useState, useEffect } from "react"

// CONTEXT and USECONTEXT
// Setting Context Type. Essentially what the provider will provide.
interface TimerContextType {
    getRemainingTime: () => number,
    applyPenalty: (penalty: number) => void
}

const TimerContext = createContext<TimerContextType | undefined>(undefined)

export function useTimerContext(){
    const context = useContext(TimerContext)
    if (context == null) {
        throw new Error('useTimerContext should be used inside a TimerProvider')
    }
    return context
}

// CONTEXT PROVIDER
// Setting props for the Context Provider
interface TimerProviderProps {
    children: ReactNode
}

// Context provider. Attributes and methods accessible through useContext
export function TimerProvider({ children }: TimerProviderProps) {
    // Timer logic
    const [ remainingTime, setRemainingTime ] = useState<number>(40 * 60)
    useEffect(() => {
        if (remainingTime === 0) return

        const timer = setInterval(() => {
            setRemainingTime(prevRemainingTime => prevRemainingTime - 1)
        }, 1000)

        return () => clearInterval(timer)
    }, [remainingTime])

    // Timer functions
    function getRemainingTime() {
        return remainingTime
    }

    function applyPenalty(penalty: number){
        setRemainingTime(prevRemainingTime => prevRemainingTime - penalty)
    }

    return (
        <TimerContext.Provider
            value ={{
                getRemainingTime,
                applyPenalty
            }}
        >
            {children}
        </TimerContext.Provider>
    )
}