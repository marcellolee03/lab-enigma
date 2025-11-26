import { type Enigma } from "../../../models/Puzzle"
import { useState } from "react"

interface CarouselCardProps {
    enigma: Enigma
}

export function EnigmaCard({ enigma }: CarouselCardProps) {
    const [ typedAnswer_1, setTypedAnswer_1 ] = useState<string>("")
    const [ userAnswer_1, setUserAnswer_1 ] = useState<string[]>([])

    const [ typedAnswer_2, setTypedAnswer_2 ] = useState<string>("")
    const [ userAnswer_2, setUserAnswer_2 ] = useState<string[]>([])

    function handleChange_1 (event: React.ChangeEvent<HTMLInputElement>) {
        const newTypedValue = event.target.value
        setTypedAnswer_1(newTypedValue)
        setUserAnswer_1([newTypedValue])
        console.log(typedAnswer_1)
        console.log(userAnswer_1)
    }

    function handleChange_2 (event: React.ChangeEvent<HTMLInputElement>) {
        const newTypedValue = event.target.value
        setTypedAnswer_2(newTypedValue)
        setUserAnswer_2([newTypedValue])
        console.log(typedAnswer_2)
        console.log(userAnswer_2)
    }

    return (
        <div>
            <p>{enigma.hint}</p>
            <p>{enigma.first_question}</p>
            <input
                type="text"
                value={typedAnswer_1}
                onChange={handleChange_1}
            />

            <p>{enigma.second_question}</p>
            <input
                type="text"
                value={typedAnswer_2}
                onChange={handleChange_2}
            />
        </div>
    )
}