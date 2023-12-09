import { RouterProvider, createBrowserRouter } from "react-router-dom";
import UserLayout from "../layouts/user-layout";
import HomePage from "../pages/home-page";
import FeaturedPage from "../pages/featured-page";
import AdvertiseEstatePage from "../pages/advertise-estate-page";
import ContactPage from "../pages/contact-page";
import AboutPage from "../pages/about-page";
import LoginPage from "../pages/login-page";

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
                element: <FeaturedPage />
            },
            {
                path: "advertise-estate",
                element: <AdvertiseEstatePage />
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
        ]
    }
]);


const AppRouter = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default AppRouter