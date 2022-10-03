import React from "react";
import { createBrowserRouter } from "react-router-dom";
import HomePage from '../pages/HomePage.mdx';
import ErrorPage from '../pages/ErrorPage.mdx';

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomePage />,
        errorElement: <ErrorPage />,
    }
]);

export default router;