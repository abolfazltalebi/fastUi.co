import { Outlet } from "react-router-dom";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";

export default function Layout() { 
  return (
    <>
      <Header />
      <main className="space-y-26 my-6 ">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
