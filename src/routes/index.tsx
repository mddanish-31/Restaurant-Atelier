import { Routes, Route } from 'react-router-dom';
import Home from '@/pages/Home/Home';
import Restaurants from '@/pages/Restaurants/Restaurants';
import RestaurantDetail from '@/pages/RestaurantDetail/RestaurantDetail';
import Menu from '@/pages/Menu/Menu';
import About from '@/pages/About/About';
import Contact from '@/pages/Contact/Contact';
import Cart from '@/pages/Cart/Cart';
import { ComingSoonPage } from '@/components/common/ComingSoonPage';

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/restaurants" element={<Restaurants />} />
      <Route path="/restaurants/:id" element={<RestaurantDetail />} />
      <Route path="/menu" element={<Menu />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/privacy" element={<ComingSoonPage title="Privacy Policy" />} />
      <Route path="/terms" element={<ComingSoonPage title="Terms & Conditions" />} />
      <Route path="/events" element={<ComingSoonPage title="Events & Experiences" />} />
    </Routes>
  );
}