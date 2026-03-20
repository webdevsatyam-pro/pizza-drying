import { Link, NavLink, Route, Routes } from "react-router";
import HomePage from "./pages/Home";
import ProductsPage from "./pages/Menus";
import ContactUsPage from "./pages/ContactUs";
import Navbar from "./components/Navbar";
import NotFoundPage from "./components/NotFound";
import OurStoryPage from "./pages/OurStory";
import Hero from "./components/Hero";
import OurStory from "./pages/OurStory";

const App = () => {
  return (
    <>
      {/* <Navbar /> */}
      <Hero />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/menus" element={<ProductsPage />} />
        <Route path="/our_story" element={<OurStoryPage />} />
        <Route path="/contact_us" element={<ContactUsPage />} />
        <Route path="/*" element={<NotFoundPage />} />
        <Route path="/our-story" element={<OurStory />} />
      </Routes>
    </>
  );
};

export default App;
