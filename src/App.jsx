import "./App.css";
import { Routes, Route } from "react-router";
import RootLayout from "./components/layouts/RootLayout";
import Home from "./components/pages/Home";
import Shop from "./components/pages/Shop";
import Error from "./components/pages/Error";
import About from "./components/pages/About";
import ProductInside from "./components/pages/ProductInside";
import Contact from "./components/pages/Contact";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/about" element={<About/>} />
          <Route path="/productInside" element={<ProductInside/>} />
          <Route path="/contact" element={<Contact/>} />

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
