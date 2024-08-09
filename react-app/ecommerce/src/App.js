import "./App.css";
import { createBrowserRouter, Outlet } from "react-router-dom";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Contact from "./components/Contact";
import Landing from "./components/Landing";
import Error from "./components/Error";
import LinkK from "./components/LinkK";

function App() {
  return (
    <div className="App">
      {/* <Landing /> */}
      <Outlet /> {/* This will render nested routes */}
      <LinkK></LinkK>
    </div>
  );
}

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "navbar", // Change path to be relative
        element: <Navbar />,
      },
      {
        path: "contact", // Change path to be relative
        element: <Contact />,
      },
      {
        path: "about", // Move 'about' under the main route
        element: <About />,
      },
    ],
  },
  {
    path: "/header",
    element: <Header />,
  },
]);

export default App;
