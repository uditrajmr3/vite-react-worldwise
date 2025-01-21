import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../../pages/Home";
import Pricing from "../../pages/Pricing";
import Product from "../../pages/Product";
import PageNotFound from "../../pages/PageNotFound";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
