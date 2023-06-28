import ItemsList from "./Components/ItemsList";
import itemsList from "./items/items";
import "./styles.css";
import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, HashRouter } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import AboutUs from "./Components/AboutUs";
import Contacts from "./Components/Contacts";
import NotFound from "./Components/NotFound";
import Account from "./Components/Account";
import FullItem from "./Components/FullItem";
import axios from 'axios';

export default function App() {
  const [onCart, setOnCart] = useState([]);
  const onCartHandler = (item) => {
    if (onCart.find((el) => el === item)) {
      return;
    }
    setOnCart([...onCart, item]);
  };
  const [cartOpenState, setCartOpenState] = useState(false);
  const cartOpenHandler = () => {
    setCartOpenState(!cartOpenState);
  };
  const deleteFromCartHandler = (index) => {
    setOnCart(onCart.filter((el) => el.id !== index));
  };
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          process.env.REACT_APP_API_URL + '/products?populate=*',
          {
            headers: {
              Authorization: 'bearer ' + process.env.REACT_APP_API_TOKEN,
            },
          }
        );
        console.log(res.data.data);
        setProducts(res.data.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={
              <MainLayout
                cartOpen={cartOpenHandler}
                onCart={onCart}
                products={products}
                deleteFromCart={deleteFromCartHandler}
                cartState={cartOpenState}
              />
            }
          >
            <Route
              index
              element={
                <ItemsList products={products} addOnCart={onCartHandler} />
              }
            />
            <Route path="about" element={<AboutUs />} />
            <Route path="contacts" element={<Contacts />} />
            <Route path="account" element={<Account />} />
            {/* <Route
              path="fullItem"
              element={<FullItem items={itemsList} addOnCart={onCartHandler} />}
            /> */}
            <Route path="/:name" element={<FullItem products={products} items={itemsList} addOnCart={onCartHandler} />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}
