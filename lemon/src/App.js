import logo from "./logo.svg";
import "./App.css";
import OrderHome from "./Components/Orders/OrderHome";
import Headers from "./Components/General/Header/Headers";
import CartContext from "./Components/Context/CartContext";

function App() {
  return (
    <div className="h-screen w-screen">
      <CartContext>
        <Headers />
        <OrderHome />
      </CartContext>
    </div>
  );
}

export default App;
