import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Product from "./pages/Product";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import Order from "./pages/Order";
import Review from "./pages/Review/Review";
import Success from "./pages/Success";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/login" element={<Login />}></Route>
        <Route path="/" element={<Home />}></Route>
        <Route path="/products/" element={<ProductList />}></Route>
        <Route path="/product/" element={<Product />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/order" element={<Order />}></Route>
        <Route path="/review" element={<Review />}></Route>
        <Route path="/success" element={<Success />}></Route>
      </Routes>
    </Router>
  );
};

export default App;
