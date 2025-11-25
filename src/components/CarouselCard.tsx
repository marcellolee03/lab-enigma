import { type Puzzle } from "../models/Puzzle"
import { useState } from "react"

interface CarouselCardProps {
    puzzle: Puzzle
}

export function CarouselCard({ puzzle }: CarouselCardProps) {
    const [ typedAnswer_1, setTypedAnswer_1 ] = useState<string>("")
    const [ userAnswer_1, setUserAnswer_1 ] = useState<string[]>([])

    function handleChange (event: React.ChangeEvent<HTMLInputElement>) {
        const newTypedValue = event.target.value
        setTypedAnswer_1(newTypedValue)
        setUserAnswer_1([newTypedValue])
        console.log(typedAnswer_1)
        console.log(userAnswer_1)
    }

    if (puzzle.answerType === "special") {

        return (
            <div>
                <p>{puzzle.hint}</p>
                <p>{puzzle.first_question}</p>
                <input
                    type="text"
                    value={typedAnswer_1}
                    onChange={handleChange}
                />
            </div>
        )

    } else {
        return (
            <p>Unexpected error!</p>
        )
    }
}