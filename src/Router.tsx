import { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const PublicLayout = lazy(() => import("./layout/PublicLayout"));
const Home = lazy(() => import("./pages/Home"));
const Menu = lazy(() => import("./pages/Menu"));
const ServicesAndGrills = lazy(() => import("./pages/ServicesAndGrills"));


const Router = () => {
  return (
    <BrowserRouter basename="rerico">
      <Routes>
        <Route path="/" element={<Suspense fallback={null}><PublicLayout /></Suspense>}>
          <Route index element={<Home />} />
          <Route path="/servicios-y-brasas" element={<ServicesAndGrills />} />
          <Route path="/menu" element={<Menu />} />
        </Route>
        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
