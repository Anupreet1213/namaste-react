// import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header.jsx";
import Body from "./components/Body.jsx";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
// import LoginBtn from "./components/LoginBtn.jsx";
import About from "./components/About.jsx";
import RestaurantMenu from "./components/RestaurantMenu.jsx";
import { lazy, Suspense, useEffect, useState } from "react";
import UserContext from "./utils/UserContext.js";
import { Provider } from "react-redux";
import appStore from "./utils/appStore.js";
import Cart from "./components/Cart.jsx";
import Contact from "./components/Contact.jsx";
// import Grocery from "./components/Grocery.jsx";

const Grocery = lazy(() => import("./components/Grocery.jsx"));

//React Component --> It is a normal JS function that starts with a capital letter always
// React Components are of two types -----> Class based and functional based
//
//React Functional Component ---> A JS function that returns JSX
// const HeadingComponent = () => {
//   return (
//     <div id="container">
//       <h1 className="heading">Its a functional component</h1>;
//     </div>
//   );
// };

//JSX => HTML-like syntax
//...
// Creating react element using JSX
// const h1 = <h1>Gesdv</h1>;
// console.log(h1);

// Creating react elements without JSX
//...
// const parent = React.createElement(
//   "div",
//   {
//     id: "parent",
//   },
//   React.createElement("div", { id: "child" }, [
//     React.createElement("h1", {}, "Hello I am an H1 Tag"),
//     React.createElement("h1", {}, "Hello I am an H2 Tag"),
//   ])
// );
// console.log(parent);

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(parent);

// const heading = React.createElement("h1",{},"Hello World from React");

const AppLayout = () => {
  const [userName, setUserName] = useState();

  useEffect(() => {
    setUserName("Anupreet");
  }, []);

  return (
    <Provider store={appStore}>
      <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
        <Header />
        <Outlet />
      </UserContext.Provider>
    </Provider>
  );
};

const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
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
        path: "/restaurant/:id",
        element: <RestaurantMenu />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<h1>Loading.....</h1>}>
            <Grocery />
          </Suspense>
        ),
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={AppRouter} />);
