import { useRoutes } from "react-router-dom";
import paths from "./routes.json";

//Pages
import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";

export default function Router() {
  return useRoutes([
    {
      path: paths.LOGIN_URL,
      children: [{ path: "", element: <Login /> }],
    },
    {
      path: paths.DASHBOARD_URL,
      children: [{ path: "", element: <Dashboard /> }],
    },
  ]);
}
