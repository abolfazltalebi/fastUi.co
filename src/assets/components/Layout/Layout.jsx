import { Outlet } from "react-router-dom";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";

export default function Layout() { 
  return (
    <>
      <Header />
      <main className="space-y-26 container mx-auto p-6 sm:px-12 md:px-24">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
