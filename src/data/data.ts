import { type Puzzle } from "../models/Puzzle"

export const puzzles: Puzzle[] = [
    {
        id: 1,
        answerType: "open",
        question: "Qual é o formato da colônia?",
        answers: ["FODA-SE"],
        penalty: 60
    },

    {
        id: 2,
        answerType: "open",
        question: "Qual é a cor da região superior da placa?",
        answers: [],
    },

    {
        id: 3,
        answerType: "open",
        question: "Qual é a cor da região inferior da placa?",
        answers: [],
    },

    {
        id: 4,
        answerType: "open",
        question: "Descreva o cheiro.",
        answers: [],
    },

    {
        id: 5,
        answerType: "multiple_choice",
        inputType: "radio",
        options: ["Sim", "Não"],
        question: "Deixa resíduo no meio de cultura?",
        answers: [],
    },

    {
        id: 6,
        answerType: "open",
        question: "Descreva qualquer outra característica que talvez possa ser relevante.",
        answers: [],
    },

    {
        id: 7,
        answerType: "multiple_choice",
        options: ["Gram-positiva", "Gram-negativa"],
        inputType: "radio",
        question: "Qual é o tipo da parede celular da bactéria?",
        answers: [],
    },

    {
        id: 8,
        answerType: "multiple_choice",
        options: ["Catalase Positiva", "Catalase Negativa"],
        inputType: "radio",
        question: "Prova da catalase.",
        answers: [],
    },

    {
        id: 9,
        answerType: "multiple_choice",
        options: ["Catalase Positiva", "Catalase Negativa"],
        inputType: "checkbox",
        question: "A bactéria é sensível ä quais antibióticos testados?",
        answers: [],
    },
]