import { Outlet } from "react-router-dom"
import Header from "./public/Header";
import Footer from "./public/Footer";

const PublicLayout = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}

export default PublicLayout;