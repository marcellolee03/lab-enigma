import { type Enigma } from "../../../models/Puzzle"
import { EnigmaCard } from "./EnigmaCard"

interface EnigmaCarouselProps {
    enigmas: Enigma[]
}

export function EnigmaCarousel({ enigmas }: EnigmaCarouselProps){
    return (
        <>
            {enigmas.map((enigma) => (
                <EnigmaCard enigma={enigma} />
            ))}
        </>
    )
}