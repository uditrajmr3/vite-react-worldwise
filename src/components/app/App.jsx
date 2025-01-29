import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Pricing from "../../pages/pricing/Pricing";
import Product from "../../pages/product/Product";
import PageNotFound from "../../pages/pageNotFound/PageNotFound";
import AppLayout from "../../pages/appLayout/AppLayout";
import Homepage from "../../pages/home/Homepage";
import Login from "../../pages/login/Login";
import CityList from "../city/CityList";
import CountryList from "../country/CountryList";
import City from "../city/City";
import Form from "../form/Form";
import { CitiesProvider } from "../../context/CitiesContext";
import { AuthProvider } from "../../context/FakeAuthContext";
import ProtectedRoute from "../../pages/ProtectedRoute";

function App() {
  return (
    <AuthProvider>
      <CitiesProvider>
        <BrowserRouter>
          <Routes>
            {/* Landing Page Nav Routes */}
            <Route path="/" element={<Homepage />} />
            <Route path="/home" element={<Homepage />} />
            <Route path="/product" element={<Product />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/login" element={<Login />} />

            {/* Main App Nested Routes */}
            <Route
              path="app"
              element={
                <ProtectedRoute>
                  <AppLayout />
                </ProtectedRoute>
              }
            >
              <Route index element={<Navigate replace to="cities" />} />
              <Route path="cities" element={<CityList />} />
              <Route path="cities/:id" element={<City />} />
              <Route path="countries" element={<CountryList />} />
              <Route path="form" element={<Form />} />
            </Route>

            {/* 404: Not Found */}
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </BrowserRouter>
      </CitiesProvider>
    </AuthProvider>
  );
}

export default App;
