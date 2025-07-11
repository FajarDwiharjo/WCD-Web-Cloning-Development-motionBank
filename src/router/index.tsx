import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "@/pages/home";
import FAQ from "@/pages/faq";
import Blog from "@/pages/blog";
import Biaya from "@/pages/biaya";
import Promo from "@/pages/promo";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/biaya" element={<Biaya />} />
        <Route path="/promo" element={<Promo />} />
      </Routes>
    </BrowserRouter>
  );
}
