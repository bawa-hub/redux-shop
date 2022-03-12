import AddProduct from "./components/AddProduct";
import "./App.css";
import { Provider } from "react-redux";
import store from "./redux/store";
import Products from "./components/Products";
import Cart from "./components/Cart";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <AddProduct />
        <Products />
        <Cart />
      </div>
    </Provider>
  );
}

export default App;
