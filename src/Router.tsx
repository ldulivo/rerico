import { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import { PublicLayout } from "./layout/PublicLayout";
// import { Home } from "./pages/Home";
// import { Menu } from "./pages/Menu";

const PublicLayout = lazy(() => import("./layout/PublicLayout"));
const Home = lazy(() => import("./pages/Home"));
const Menu = lazy(() => import("./pages/Menu"));

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Suspense fallback={null}><PublicLayout /></Suspense>}>
          <Route index element={<Home />} />
          <Route path="/menu" element={<Menu />} />
        </Route>
        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
