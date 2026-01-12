import { Routes, Route } from "react-router-dom"
import RootLayout from "./layouts/RootLayout"
import HomePage from "./pages/HomePage"
import PlaceDetailsPage from "./pages/PlaceDetailsPage"
import ScrollToTop from "./components/Shared/ScrollToTop"

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route element={<RootLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/place/:id" element={<PlaceDetailsPage />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
