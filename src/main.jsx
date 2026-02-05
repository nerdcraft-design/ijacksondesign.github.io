// React
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// Components
import Header from "./components/Header";
import Footer from "./components/Footer";
// Pages
import Home from "./pages/Home";
import ProjectItem from "./pages/ProjectItem";
import PageNotFound from "./pages/PageNotFound";
// CSS
import "./assets/scss/custom.css";
import "bootstrap-icons/font/bootstrap-icons.css";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/portfolio/:projectUrl", element: <ProjectItem /> },
  { path: "*", element: <PageNotFound /> },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Header />
    <main>
      <RouterProvider router={router} />
    </main>
    <Footer />
  </StrictMode>,
);
