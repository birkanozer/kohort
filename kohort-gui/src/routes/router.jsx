import { createBrowserRouter } from "react-router-dom";

import LoginPage from "../pages/LoginPage/LoginPage";
import DashboardPage from "../pages/DashboardPage/DashboardPage";

const routes = [
  {
    path: "/",
    element: <DashboardPage />
  },
  {
    path: "/login",
    element: <LoginPage />
  },
  {
    path: "/test",
    element: <div>Hello world!</div>
  }
];

const router = createBrowserRouter(routes);

export default router;
