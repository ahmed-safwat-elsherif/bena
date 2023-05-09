import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = ({ children }: React.PropsWithChildren) => (
  <div className="flex min-h-[100vh] flex-col bg-babyblue-light" dir="rtl">
    <Navbar />
    <main className="min-h-[1500px] flex-1 ">{children}</main>
    <Footer />
  </div>
);

export default Layout;
