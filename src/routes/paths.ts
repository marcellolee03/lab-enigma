export const PATHS = {
    PUZZLE: "/puzzle",
    SUCCESS: "/success"
} as const

export type PathKeys = keyof typeof PATHS