import { createBrowserRouter } from "react-router-dom";
import AppLayout from "./components/layout/appLayout";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import FeaturesPage from "./pages/FeaturesPage";
import Contact from "./pages/Contact";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsAndCondition from "./pages/TermsAndCondition";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <AboutUs />,
      },
      {
        path: "/features",
        element: <FeaturesPage />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/privacy",
        element: <PrivacyPolicy />,
      },
      {
        path: "/terms",
        element: <TermsAndCondition />,
      },
    ],
  },
]);

export default Router;
