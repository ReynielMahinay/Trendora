import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import LandingPage from "./pages/LandingPage";
import NavBar from "./components/NavBar";
import ProductShowCase from "./pages/ProductShowCase";
import Footer from "./components/Footer";
import ProductFetcher from "./components/ProductFetcher";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="w-full h-full relative ">
      <section>
        <NavBar />
        <LandingPage />
      </section>
      <section>
        <ProductShowCase />
      </section>
      <section>
        <Footer />
      </section>
    </div>
  );
}

export default App;
