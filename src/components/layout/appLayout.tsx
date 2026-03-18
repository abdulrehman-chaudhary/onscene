import Header from "../ui/header";
import { Outlet } from "react-router-dom";
import Footer from "../ui/footer";

const AppLayout = () => {
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
