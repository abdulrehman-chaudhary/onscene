import { useEffect } from "react";
import Header from "../ui/header";
import { Outlet } from "react-router-dom";
import Footer from "../ui/footer";
import AOS from "aos";
import "aos/dist/aos.css";

const AppLayout = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 100,
      easing: "ease-out-cubic",
    });
  }, []);

  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default AppLayout;
