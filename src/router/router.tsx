import React from "react";
import { createBrowserRouter } from "react-router-dom";

import App from "../App";
import HomePage from '../pages/HomePage.mdx';
import ErrorPage from '../pages/ErrorPage.mdx';
import AboutMePage from '../pages/AboutMePage.mdx';
import ProjectPage from '../pages/ProjectPage.mdx';
import ContactMePage from '../pages/ContactMePage.mdx';

import BlogPageCreation from '../posts/BlogPageCreation/BlogPageCreation.mdx';

const router = createBrowserRouter([
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
                element: <ContactMePage />
            },
            {
                path: "/posts/personal-page-creation",
                element: <BlogPageCreation />,
            }
        ]
    }
]);

export default router;