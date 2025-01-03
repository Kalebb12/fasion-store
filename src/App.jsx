import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";
import { Toaster } from "react-hot-toast";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import RedirectIfAuthenticated from "./features/auth/RedirectIfAuthenticated";
import PageNotFound from "./pages/PageNotFound";
import CartPage from "./pages/CartPage";

const App = () => {
  return (
    <>
      <ReactQueryDevtools />
      <Toaster />
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/cart" element={<CartPage/>} />
        <Route
          path="/login"
          element={
            <RedirectIfAuthenticated>
              <Login />
            </RedirectIfAuthenticated>
          }
        />
        <Route
          path="/signup"
          element={
            <RedirectIfAuthenticated>
              <SignUp />
            </RedirectIfAuthenticated>
          }
        />
        <Route path="*" element={<PageNotFound/>} />
      </Routes>
    </>
  );
};

export default App;
