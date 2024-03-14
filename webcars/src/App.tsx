import { createBrowserRouter } from "react-router-dom";
import { Home } from "./pages/home";
import { Dashboard } from "./pages/dashboard";
import { NewCar } from "./pages/dashboard/new";
import { CarDetails } from "./pages/car";
import { Login } from "./pages/login";
import { Register } from "./pages/register";

import { Layout } from "./components/layout";
import { Private } from "./routes/Private";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/car/:id", element: <CarDetails /> },
      {
        path: "/dashboard",
        element: (
          <Private>
            <Dashboard />{" "}
          </Private>
        ),
      },
      {
        path: "/dashboard/new",
        element: (
          <Private>
            <NewCar />{" "}
          </Private>
        ),
      },
    ],
  },
  { path: "/login", element: <Login /> },
  { path: "/register", element: <Register /> },
]);

export { router };
