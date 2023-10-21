import Home from "./components/Home/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Movies from "./components/Movies/Movies";
import Series from "./components/Series/Series";
import NavBar from "./components/Nav/NavBar";
import Detail from "./components/Detail/Detail";
//import Root from "./components/Configs/Root";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <NavBar />
      </div>
    ),
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "movie",
        element: <Movies />,
      },
      {
        path: "tv",
        element: <Series />,
      },
      {
        path: "detail",
        element: <Detail />,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
