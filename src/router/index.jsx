import { RouterProvider, createBrowserRouter } from "react-router-dom";
import UserLayout from "../layouts/user-layout";
import HomePage from "../pages/home-page";
import FeaturedPage from "../pages/featured-page";
import AdvertiseEstatePage from "../pages/advertise-estate-page";
import ContactPage from "../pages/contact-page";
import AboutPage from "../pages/about-page";
import LoginPage from "../pages/login-page";
import RegisterPage from "../pages/register-page";
import PrivateRoute from "./private-route";
import { config } from "../helpers/config";
import Error403Page from "../pages/errors/error-403-page";
import Error404Page from "../pages/errors/error-404-page";

const router = createBrowserRouter([
    {
        path: "/",
        element: <UserLayout />,
        children: [
            {
                index: true,
                element: <HomePage />
            },
            {
                path: "featured",
                element: <PrivateRoute roles={config.pageRoles.featured}><FeaturedPage /></PrivateRoute>
            },
            {
                path: "advertise-estate",
                element: <PrivateRoute roles={config.pageRoles.advertiseEstate}><AdvertiseEstatePage /></PrivateRoute>
            },
            {
                path: "contact",
                element: <ContactPage />
            },
            {
                path: "about",
                element: <AboutPage />
            },
            {
                path: "login",
                element: <LoginPage />
            },
            {
                path: "register",
                element: <RegisterPage />
            },
            {
                path: "unauthorized",
                element: <Error403Page />
            },
            {
                path: "*",
                element: <Error404Page />
            }
        ]
    }
]);


const AppRouter = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default AppRouter