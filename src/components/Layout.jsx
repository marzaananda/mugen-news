import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <div>
      <Navbar />
      <main className="pt-[120px] max-w-6xl mx-auto px-4">{children}</main>
      <Footer />
    </div>
  );
}
