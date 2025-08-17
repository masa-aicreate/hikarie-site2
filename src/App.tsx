import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Company from "./pages/Company";
import { LanguageProvider } from "./i18n/LanguageProvider";

export default function App() {
  return (
    <LanguageProvider>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/company" element={<Company />} />
      </Routes>
      <Footer />
    </LanguageProvider>
  );
}
