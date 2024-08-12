import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { QueryClientProvider } from "react-query";
import { queryClient } from "./lib/react-query.ts";
import { RouterProvider } from "react-router-dom";
import { routerConfig } from "./routes/index.tsx";

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <QueryClientProvider client={queryClient}>
            <RouterProvider router={routerConfig} />
        </QueryClientProvider>
    </StrictMode>,
);
