import { PATHS } from "./paths";
import { PuzzlePage } from "../pages/PuzzlePage";
import { SuccessPage } from "../pages/SuccessPage";
import { FailurePage } from "../pages/FailurePage";

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
    {
        path: PATHS.FAILURE,
        element: <FailurePage />,
        title: "Fracasso"
    }

]