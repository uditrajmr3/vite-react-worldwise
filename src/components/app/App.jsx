import { BrowserRouter, Routes, Route } from "react-router-dom";
import Pricing from "../../pages/pricing/Pricing";
import Product from "../../pages/product/Product";
import PageNotFound from "../../pages/pageNotFound/PageNotFound";
import AppLayout from "../../pages/appLayout/AppLayout";
import Homepage from "../../pages/home/Homepage";
import Login from "../../pages/login/Login";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/home" element={<Homepage />} />
        <Route path="/product" element={<Product />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/login" element={<Login />} />

        <Route path="app" element={<AppLayout />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
