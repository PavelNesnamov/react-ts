import "./App.css";
import type { JSX } from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import HomePage from "./components/homePage/HomePage";
import Layout from "./layout/Layout";
import FetchFox from "./components/fethFox/FechFox";
import Feedback from "./components/Feedback";
import NoPage from "./components/noPage/NoPage";
import ProductPage from "./components/productPage/ProductPage";
import StorePage from "./components/store/storePage/StorePage";
import { CartProvider } from "./context/CartContext";
import Cart from "./components/cart/Cart";
import Products from "./components/products/Products";
import FormGender from "./components/formGender/FormGender";

import Lesson01 from "./lessons/lesson01/Lesson01";
import Lesson02 from "./lessons/lesson02/Lesson02";
import Lesson03 from "./lessons/lesson03/Lesson03";
import Lesson04 from "./lessons/lesson04/Lesson04";
import Lesson05 from "./lessons/lesson05/Lesson05";
import Lesson06 from "./lessons/lesson06/Lesson06";
import Lesson07 from "./lessons/lesson07/Lesson07";
import Lesson08 from "./lessons/lesson08/Lesson08";
import Lesson09 from "./lessons/lesson09/Lesson09";
import Lesson10 from "./lessons/lesson10/Lesson10";
import Lesson11 from "./lessons/lesson11/Lesson11";
import Lesson12 from "./lessons/lesson12/Lesson12";
import Homework12 from "./homeworks/Homework12";
import Lesson13 from "./lessons/lesson13/Lesson13";
import Lesson14 from "./lessons/lesson14/Lesson14";
import Lesson15 from "./lessons/lesson15/Lesson15";
import Lesson17 from "./lessons/lesson17/Lesson17";
import Lesson18 from "./lessons/Lesson18/Lesson18";
import { Provider } from "react-redux";
import { store } from "./app/store";

const routes = [
  {
    element: <Products />,
    path: "products",
  },
  {
    element: <HomePage />,
    path: "/",
  },
  {
    element: <FetchFox />,
    path: "fetch-fox",
  },
  {
    element: <Feedback />,
    path: "feedback",
  },
  {
    element: <NoPage />,
    path: "*",
  },
  {
    element: <FormGender />,
    path: "formGender",
  },
  {
    element: <ProductPage />,
    path: "Dynamic-routing/:id",
  },
  {
    element: <StorePage />,
    path: "Dynamic-routing-test/:id",
  },
  {
    element: <Lesson01 />,
    path: "React-intro",
  },
  {
    element: <Lesson02 />,
    path: "React-Props",
  },
  {
    element: <Lesson03 />,
    path: "JSX-components",
  },
  {
    element: <Lesson04 />,
    path: "React-UseState-hook",
  },
  {
    element: <Lesson05 />,
    path: "React-Map-components",
  },
  {
    element: <Lesson06 />,
    path: "React-TS",
  },
  {
    element: <Lesson07 />,
    path: "React-TS-2",
  },
  {
    element: <Lesson08 />,
    path: "UseEffect-hook",
  },
  {
    element: <Lesson09 />,
    path: "CSS-modules",
  },
  {
    element: <Lesson10 />,
    path: "React-test",
  },
  {
    element: <Lesson11 />,
    path: "React-router-dom",
  },
  {
    element: <Lesson12 />,
    path: "Formik",
  },
  {
    element: <Homework12 />,
    path: "Gender-Anayze",
  },
  {
    element: <Lesson13 />,
    path: "Yup",
  },
  {
    element: <Lesson14 />,
    path: "Dynamic-routing",
  },
  {
    element: <Lesson15 />,
    path: "React-practice",
  },
  {
    element: <Cart />,
    path: "Cart",
  },
  {
    element: <Products />,
    path: "products",
  },
  {
    element: <ProductPage />,
    path: "products/:id",
  },
  {
    element: <Lesson17 />,
    path: "Context-practice",
  },
  {
    element: <Lesson18 />,
    path: "Redux",
  },
];

function App(): JSX.Element {
  return (
    // 1. оборачиваем все приложение в HashRouter
    // 2. все маршруты оборачиваем в Routes
    // 3. начинаем описывать структуру с корневого маршрута с Layout
    // * оборачиваем все приложение в CartProvider, чтобы иметь доступ к данным из корзины
    // ! оборачиваем все придожение в store, чтобы иметь доступ к данным redux
    <Provider store={store}>
      <CartProvider>
        <HashRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              {routes.map((route) => (
                <Route path={route.path} element={route.element} />
              ))}
            </Route>
          </Routes>
        </HashRouter>
      </CartProvider>
    </Provider>
  );
}

export default App;
