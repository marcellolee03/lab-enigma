import { type Puzzle } from "../models/Puzzle"

export const puzzles: Puzzle[] = [


    {
        id: 1,
        answerType: "open",
        question: "Qual é o formato da colônia?",
        answers: [],
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
        answerType: "radio",
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
        answerType: "radio",
        options: ["Gram-positiva", "Gram-negativa"],
        question: "Qual é o tipo da parede celular da bactéria?",
        answers: ["Gram-positiva"],
        penalty: 300
    },

    {
        id: 8,
        answerType: "radio",
        options: ["Catalase Positiva", "Catalase Negativa"],
        question: "Prova da catalase.",
        answers: ["Catalase Positiva"],
        penalty: 300
    },

    {
        id: 9,
        answerType: "checkbox",
        options: ["Tetraciclina", "Novobiocina", "Vancomicina", "Penicilina", "Nitrofurantoína", "Ceftriaxona"],
        question: "A bactéria é sensível à quais antibióticos testados?",
        answers: ["Vancomicina", "Ceftriaxona"],
        penalty: 300
    },

    {
        id: 10,
        answerType: "open",
        question: "--nos olhos do microbiologista.",
        answers: ["microscópio"],
        penalty: 300
    },

    {
        id: 11,
        answerType: "open",
        question: "--",
        answers: ["autoclave"],
        penalty: 300
    },
        
    {
        id: 12,
        answerType: "open",
        question: "---",
        answers: ["Meio de cultura com cloranfenicol"],
        penalty: 300
    },

    {
        id: 13,
        answerType: "open",
        question: "----",
        answers: ["fluxo laminar"],
        penalty: 300
    },

    {
        id: 14,
        answerType: "open",
        question: "-----",
        answers: ["modelos didáticos"],
        penalty: 300
    },

    {
        id: 15,
        answerType: "open",
        question: "--6384. Qual é o nome da bactéria?",
        answers: ["enterococcus faecalis"],
        penalty: 300
    },
]