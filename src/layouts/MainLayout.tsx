import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div className="font-primary">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainLayout;
