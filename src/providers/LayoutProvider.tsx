import Footer from "../components/shared/Footer";
import Navbar from "../components/navbar/Navbar";

const LayoutProvider = ({ children }: React.PropsWithChildren) => (
  <div className="flex min-h-[100vh] flex-col bg-babyblue-light" dir="rtl">
    <Navbar />
    <main className="min-h-[1500px] flex-1 ">{children}</main>
    <Footer />
  </div>
);

export default LayoutProvider;
