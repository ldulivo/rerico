import { createBrowserRouter } from "react-router-dom";
import { PublicLayout } from "./layout/PublicLayout";
import { PrivateLayout } from "./layout/PrivateLayout";
import { Home } from "./pages/Home";
import { Menu } from "./pages/Menu";
import { Services } from "./pages/Services";
import { Contact } from "./pages/Contact";

export const router = createBrowserRouter([
  // public
  {
    path: "/",
    element: <PublicLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {path: "menu",
        element: <Menu />,
      },
      {
        path: "servicios",
        element: <Services />,
      },
      {
        path: "contacto",
        element: <Contact />,
      },
    ],
  },
  // private
  {
    path: "/admin",
    element: <PrivateLayout />,
    children: [],
  },
]);
