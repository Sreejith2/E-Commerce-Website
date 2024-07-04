import NavBar from "./components/Navbar/NavBar";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Shop from "./pages/Shop";
import ShopCategory from "./pages/ShopCategory";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import LoginSignup from "./pages/LoginSignup";

import men_banner from "./components/assets/banner_mens.png"
import women_banner from "./components/assets/banner_women.png"
import kids_banner from "./components/assets/banner_kids.png"
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path="/" element={<Shop/>}/>
          <Route path="/men" element={<ShopCategory banner={men_banner} category="men" />}/>
          <Route path="/women" element={<ShopCategory banner={women_banner} category="women"/>}/>
          <Route path="/kids" element={<ShopCategory banner={kids_banner} category="kid"/>}/>
          <Route path="/product" element={<Product/>}>
            <Route path=":productId" element={<Product/>}/>
          </Route>
          <Route path="/cart" element={<Cart/>}/>
          <Route path="/login" element={<LoginSignup/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
