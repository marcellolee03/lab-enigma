export const PATHS = {
    PUZZLE: "/puzzle",
    END: "/end"
} as const

export type PathKeys = keyof typeof PATHS