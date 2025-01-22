import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Pricing from "../../pages/pricing/Pricing";
import Product from "../../pages/product/Product";
import PageNotFound from "../../pages/pageNotFound/PageNotFound";
import AppLayout from "../../pages/appLayout/AppLayout";
import Homepage from "../../pages/home/Homepage";
import Login from "../../pages/login/Login";
import CityList from "../city/CityList";
import { useReducer, useEffect } from "react";
import CountryList from "../country/CountryList";
import City from "../city/City";
import Form from "../form/Form";

const BASE_URL = "http://localhost:8000";

function reducer(state, action) {
  switch (action.type) {
    case "loading":
      return { ...state, isLoading: true, error: "" };
    case "success":
      return { ...state, cities: action.payload, isLoading: false };
    case "error":
      return { ...state, error: action.payload, isLoading: false };

    default:
      throw new Error("Unknown action!!");
  }
}

function App() {
  const initialState = { cities: [], isLoading: false, error: "" };
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(function () {
    async function fetchCities() {
      dispatch({ type: "loading" });
      try {
        const response = await fetch(`${BASE_URL}/cities`);
        const cities = await response.json();
        dispatch({ type: "success", payload: cities });
      } catch (error) {
        dispatch({ type: "error", payload: error.message });
      }
    }
    fetchCities();
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        {/* Landing Page Nav Routes */}
        <Route path="/" element={<Homepage />} />
        <Route path="/home" element={<Homepage />} />
        <Route path="/product" element={<Product />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/login" element={<Login />} />

        {/* Main App Nested Routes */}
        <Route path="app" element={<AppLayout />}>
          <Route index element={<Navigate replace to="cities" />} />
          <Route path="cities" element={<CityList data={state} />} />
          <Route path="cities/:id" element={<City />} />
          <Route path="countries" element={<CountryList data={state} />} />
          <Route path="form" element={<Form />} />
        </Route>

        {/* 404: Not Found */}
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
