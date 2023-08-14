import './App.css';
import Navbaar from './components/header/Navbaar';
import Newnav from './components/newnavbaar/Newnav';
import Maincomp from './components/home/Maincomp'; 
import Footer from './components/footer/Footer';
import Sign_in from './components/signup_sign/Sign_in';
import SIgnUp from './components/signup_sign/SIgnUp';
import Cart from './components/cart/Cart';
import Buynow from './components/buynow/Buynow';
import { Routes,Route } from "react-router-dom"
import AboutUsPage from './components/aboutus/Aboutus';
import ContactUsPage from './components/contactus/Contactus';

function App() {
  return (
    <>
      <Navbaar/>
      <Newnav />
      <Routes>
        <Route path="/" element={<Maincomp/>}/>
        <Route path="/login" element={<Sign_in/>}/>
        <Route path="/register" element={<SIgnUp/>}/>
        <Route path="/getproductsone/:id" element={<Cart/>}/>
        <Route path="/buynow" element={<Buynow/>}/>
        <Route path="/aboutus" element={<AboutUsPage/>}/>
        <Route path="/contactus" element={<ContactUsPage/>}/>
      </Routes>
      <Footer /> 
    </>
  );
}

export default App;
