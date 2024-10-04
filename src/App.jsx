import "./App.css";
import { Routes, Route } from "react-router-dom";

import QrCodeGen from "./pagesComponents/QrCodeGenerate";
import HistoreQrCode from "./pagesComponents/HistoreQrCode";
import Navigation from "./staticComponents/Navigation";
import First from "./pagesComponents/First";
import Footer from "./staticComponents/Footer";

export default function App() {
  return (
    <>
      <Navigation />

      <Routes>
        <Route path="/" element={<First />} />
        <Route path="/QrCodeGeneration" element={<QrCodeGen />} />
        <Route path="/History" element={<HistoreQrCode />} />
      </Routes>

      <Footer />
    </>
  );
}
