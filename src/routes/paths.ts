export const PATHS = {
    PUZZLE: "/puzzle",
    SUCCESS: "/success",
    FAILURE: "/failure"
} as const

export type PathKeys = keyof typeof PATHS