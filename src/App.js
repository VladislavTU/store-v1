import ItemsList from './Components/ItemsList';
import itemsList from './items/items';
import './styles.css';
import { useState } from 'react';
import { BrowserRouter, Routes, Route, HashRouter } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import AboutUs from './Components/AboutUs';
import Contacts from './Components/Contacts';
import NotFound from './Components/NotFound';
import Account from './Components/Account';
import FullItem from './Components/FullItem';

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
                items={itemsList}
                deleteFromCart={deleteFromCartHandler}
                cartState={cartOpenState}
              />
            }
          >
            <Route
              index
              element={
                <ItemsList items={itemsList} addOnCart={onCartHandler} />
              }
            />
            <Route path="about" element={<AboutUs />} />
            <Route path="contacts" element={<Contacts />} />
            <Route path="account" element={<Account />} />
            <Route path="fullItem" element={<FullItem />} />
            <Route path="/:name" element={<FullItem items={itemsList} />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}
