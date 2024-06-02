import { FAQ, Footer, NavBar, Socials } from "./components/components";
import {
  Home,
  Blog,
  Services,
  About,
  Book,
  Subs,
  Contact,
  Community,
  BlogContentPg,
} from "./pages/pages";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Socials />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/book" element={<Book />} />
        <Route path="/subs" element={<Subs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/community" element={<Community />} />
        <Route path="/blogContentPg" element={<BlogContentPg />} />
      </Routes>
      <FAQ />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
