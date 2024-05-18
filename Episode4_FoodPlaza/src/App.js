import {React,Suspense,lazy} from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import Counter from "./components/Counter";
import Loading from "./components/Loading";
const GlossaryStore = lazy(() => import('./components/GlossaryStore'));

const Applayout = () => {
  return (
    <div className="App">
      <Header />
      <Outlet />
    </div>
  );
};

const Approute = createBrowserRouter([
  {
    path: "/",
    element: <Applayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },

      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu />,
      },
      {
        path: "/counter",
        element: <Counter />,
      },
      {
        path: "/glossary",
        element: <Suspense fallback={<Loading/>}><GlossaryStore /></Suspense>,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={Approute} />);
