import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Navbar from "../components/Navbar";
import About from "../pages/About";
import Events from "../pages/Events";
import Workshops from "../pages/Workshops";
import Details from "../components/Details";
import ContactPage from "../pages/Contact";
import GetDirections from "../pages/Directions";
// Import other pages if necessary

const AppRoutes = () => (
  <Router>
    {/* Navbar placed here will be rendered on all pages */}
    <Navbar />

    <Routes>
      <Route element={<Navbar />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/events" element={<Events />} />
        <Route path="/:type/:eventId" element={<Details />} />
        <Route path="/workshops" element={<Workshops />} />
        <Route path="/contact-us" element={<ContactPage/>} /> 
        <Route path="/get-directions" element={<GetDirections/>} /> 
      </Route>
      
    </Routes>
  </Router>
);

export default AppRoutes;