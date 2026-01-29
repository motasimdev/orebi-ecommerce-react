import "./App.css";
import { Routes, Route } from "react-router";
import RootLayout from "./components/layouts/RootLayout";
import Home from "./components/pages/Home";
import Shop from "./components/pages/Shop";
import Error from "./components/pages/Error";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Login from "./components/Login";
import SignUp from "./components/layouts/SignUp";
import MyAccount from "./components/pages/MyAccount";
import ProductDetails from "./components/pages/productDetails";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/about" element={<About/>} />
          <Route path="/product/:id" element={<ProductDetails/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/signup" element={<SignUp/>} />
          <Route path="/myAccount" element={<MyAccount/>} />

          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
{
  /*  */
}
