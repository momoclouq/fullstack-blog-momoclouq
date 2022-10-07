import React from "react";
import { createHashRouter } from "react-router-dom";

import App from "../App";
import HomePage from '../pages/HomePage.mdx';
import AboutMePage from '../pages/AboutMePage.mdx';
import ProjectPage from '../pages/ProjectPage.mdx';

import BlogPageCreation from '../posts/BlogPageCreation/BlogPageCreation.mdx';
import ErrorPage from "../pages/ErrorPage";

const router = createHashRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <HomePage />,
            },
            {
                path: "/about-me",
                element: <AboutMePage />
            },
            {
                path: "/projects",
                element: <ProjectPage />
            },
            {
                path: "/contact-me",
                element: <AboutMePage />
            },
            {
                path: "/posts/personal-page-creation",
                element: <BlogPageCreation />,
            }
        ]
    }
]);

export default router;