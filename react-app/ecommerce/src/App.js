import "./App.css";
import { createBrowserRouter, Outlet } from "react-router-dom";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Contact from "./components/Contact";
import Landing from "./components/Landing";
import Error from "./components/Error";

function App() {
  return (
    <div className="App">
      <Landing />
      <Outlet></Outlet>
      
    </div>
  );
}

// Define the appRouter with all the routes
export const appRouter = createBrowserRouter([
  {
    path: "/",
    //
    element: <App />,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/navbar",
        element: <Navbar />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/navbar",
    element: <Navbar />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/header",
    element: <Header />,
  },
]);

export default App;
