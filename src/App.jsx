import { useState } from "react";

import "./App.css";
import LandingPage from "./pages/LandingPage";
import NavBar from "./components/NavBar";
import ProductShowCase from "./pages/ProductShowCase";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";

function App() {
  const [cart, setCart] = useState([]);

  const addCart = (product) => {
    setCart((prevCart) => {
      const existing = prevCart.fint((item) => item.id === product.id);
      if (existing) {
        return prevCart.map((item) => {
          item.id === product.id
            ? { ...item, quantiy: item.quantiy + 1 }
            : item;
        });
      } else {
        return [...prevCart, { ...product, quantiy: 1 }];
      }
    });
  };
  return (
    <div className="w-full relative ">
      <NavBar title="TEDR" />

      <section>
        <Outlet context={{ cart, setCart, addCart }} />
      </section>

      <Footer />
    </div>
  );
}

export default App;
