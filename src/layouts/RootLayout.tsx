import { Outlet } from "react-router-dom";
import { Navbar } from "../components/Shared/Navbar";
import Footer from "../components/Shared/Footer";

export default function RootLayout() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans antialiased">
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
