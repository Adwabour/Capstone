import "./App.css";
import OrderHome from "./Components/Orders/OrderHome";
import Headers from "./Components/General/Header/Headers";
import CartContext from "./Components/Context/CartContext";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MenuItemCart from "./Components/General/Header/MenuItemCart";
import Home from "./Components/Home/Home";

function App() {
  return (
    <div className="h-screen w-screen">
      <CartContext>
        <Router>
          <Headers />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="menu/" element={<OrderHome />} />
          </Routes>
        </Router>
      </CartContext>
    </div>
  );
}

export default App;
