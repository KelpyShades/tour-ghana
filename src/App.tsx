import { Routes, Route } from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import FAQPage from "./pages/FAQPage";
import TravelGuidePage from "./pages/TravelGuidePage";
import PlaceDetailsPage from "./pages/PlaceDetailsPage";
import ScrollToTop from "./components/Shared/ScrollToTop";

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route element={<RootLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/faq" element={<FAQPage />} />
          <Route path="/guide" element={<TravelGuidePage />} />
          <Route path="/place/:id" element={<PlaceDetailsPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
