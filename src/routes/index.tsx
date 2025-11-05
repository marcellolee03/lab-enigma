import { PATHS } from "./paths";
import { PuzzlePage } from "../pages/PuzzlePage";
import { FinalHintPage } from "../pages/FinalHintPage";

export const routes = [
    {
        path: PATHS.PUZZLE,
        element: <PuzzlePage />,
        title: "Puzzle"
    },
    {
        path: PATHS.PUZZLE,
        element: <FinalHintPage />,
        title: "Final Hint"
    },

]