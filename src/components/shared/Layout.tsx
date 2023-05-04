import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = ({ children }: React.PropsWithChildren) => (
  <div className="flex flex-col bg-babyblue-light min-h-[100vh]" dir="rtl">
    <Navbar />
    <main className="flex-1 min-h-[1500px] container mx-auto">{children}</main>
    <Footer />
  </div>
);

export default Layout;
