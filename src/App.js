import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Topbar from "./Components/Topbar/Topbar";
import Root from "./Pages/Root";
import Home from "./Pages/Home";
import Login from "./Pages/Login";

function App() {
  const  router  = createBrowserRouter([
    {path: "/" , element: <Root /> ,

    children: [
      {path: "/", element: <Login />  }, 
      {path: "/login", element: <Login />  } 
    ]
    }
  ]);
  return <RouterProvider router={router} />
}

export default App;
