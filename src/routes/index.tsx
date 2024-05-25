import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Home";
import App from "../App";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/home",
    element: <Home />,
  },
]);

export default router;
