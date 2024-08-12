import { createBrowserRouter } from "react-router-dom";
import { layoutUrl } from "./urls";
import { Home, Layout } from "@/pages";
import { ErrorBoundaryPage } from "@/components/error/boundary-error";

export const routerConfig = createBrowserRouter([
    {
        path: layoutUrl,
        element: <Layout />,
        errorElement: (
            <Layout>
                <ErrorBoundaryPage />
            </Layout>
        ),
        children: [
            {
                path: layoutUrl,
                element: <Home />,
            },
        ],
    },
]);
