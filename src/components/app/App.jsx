/* Importing the react & router components */
import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

/* Importing the hooks, context, & utils */
import { CitiesProvider } from "../../context/CitiesContext";
import { AuthProvider } from "../../context/FakeAuthContext";
import ProtectedRoute from "../../pages/ProtectedRoute";
import SpinnerFullPage from "../spinner/SpinnerFullPage";

/* Importing the components */
import CityList from "../city/CityList";
import CountryList from "../country/CountryList";
import City from "../city/City";
import Form from "../form/Form";

/* Importing the pages */
// import Pricing from "../../pages/pricing/Pricing";
// import Product from "../../pages/product/Product";
// import PageNotFound from "../../pages/pageNotFound/PageNotFound";
// import AppLayout from "../../pages/appLayout/AppLayout";
// import Homepage from "../../pages/home/Homepage";
// import Login from "../../pages/login/Login";

const Pricing = lazy(() => import("../../pages/pricing/Pricing"));
const Product = lazy(() => import("../../pages/product/Product"));
const AppLayout = lazy(() => import("../../pages/appLayout/AppLayout"));
const Homepage = lazy(() => import("../../pages/home/Homepage"));
const Login = lazy(() => import("../../pages/login/Login"));
const PageNotFound = lazy(() =>
  import("../../pages/pageNotFound/PageNotFound")
);

/* Import build sizes without lazy loading */
// dist/index.html                   0.47 kB │ gzip:   0.31 kB
// dist/assets/index-97624c9d.css   30.55 kB │ gzip:   5.11 kB
// dist/assets/index-4e2a7713.js   521.35 kB │ gzip: 153.53 kB

/* Import build sizes with lazy loading */
// dist/index.html                           0.47 kB │ gzip:   0.31 kB
// dist/assets/Logo-515b84ce.css             0.03 kB │ gzip:   0.05 kB
// dist/assets/Login-f39ef3ff.css            0.35 kB │ gzip:   0.22 kB
// dist/assets/Product-cf1be470.css          0.47 kB │ gzip:   0.27 kB
// dist/assets/Homepage-b9276e6f.css         0.51 kB │ gzip:   0.30 kB
// dist/assets/PageNav-d3c5d403.css          0.51 kB │ gzip:   0.28 kB
// dist/assets/AppLayout-a9e6818a.css        1.91 kB │ gzip:   0.70 kB
// dist/assets/index-4f82858f.css           26.88 kB │ gzip:   4.45 kB
// dist/assets/Product.module-02d70b80.js    0.06 kB │ gzip:   0.07 kB
// dist/assets/PageNotFound-42fc15ce.js      0.15 kB │ gzip:   0.15 kB
// dist/assets/Logo-38dbeddc.js              0.21 kB │ gzip:   0.19 kB
// dist/assets/PageNav-8fef5119.js           0.49 kB │ gzip:   0.27 kB
// dist/assets/Pricing-e21060ac.js           0.65 kB │ gzip:   0.41 kB
// dist/assets/Homepage-5d7da08f.js          0.67 kB │ gzip:   0.41 kB
// dist/assets/Product-34f6ced3.js           0.85 kB │ gzip:   0.48 kB
// dist/assets/Login-ada78851.js             1.12 kB │ gzip:   0.60 kB
// dist/assets/AppLayout-e6a0c67e.js       157.38 kB │ gzip:  46.40 kB
// dist/assets/index-7a1fa076.js           361.46 kB │ gzip: 106.17 kB

function App() {
  return (
    <AuthProvider>
      <CitiesProvider>
        <BrowserRouter>
          <Suspense fallback={<SpinnerFullPage />}>
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
          </Suspense>
        </BrowserRouter>
      </CitiesProvider>
    </AuthProvider>
  );
}

export default App;
