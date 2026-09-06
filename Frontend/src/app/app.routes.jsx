import { createBrowserRouter } from "react-router";
import LandingPage from "../features/Home/pages/LandingPage";
import HomePageLayout from "../features/Home/HomePageLayout";

const routes = createBrowserRouter([
    {
        path: "/",
        element: <HomePageLayout />,
        children: [
            {
                path: "",
                element: <LandingPage />
            }
        ]
    }
]);

export default routes;