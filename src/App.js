import Home from "./components/Home/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Movies from "./components/Movies/Movies";
import Series from "./components/Series/Series";
import NavBar from "./components/Nav/NavBar";
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
