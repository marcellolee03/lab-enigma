import { PATHS } from "./paths";
import { PuzzlePage } from "../pages/PuzzlePage";
import { SuccessPage } from "../pages/SuccessPage";

export const routes = [
    {
        path: PATHS.PUZZLE,
        element: <PuzzlePage />,
        title: "Puzzle"
    },
    {
        path: PATHS.SUCCESS,
        element: <SuccessPage />,
        title: "Sucesso"
    },

]