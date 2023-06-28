import { Outlet } from 'react-router-dom';
import Header from '../Components/Header';
import Footer from '../Components/Footer';

const MainLayout = ({ cartOpen, onCart, products, deleteFromCart, cartState }) => {
  return (
    <>
      <Header
        cartOpen={cartOpen}
        onCart={onCart}
        products={products}
        deleteFromCart={deleteFromCart}
        cartState={cartState}
      />
      <Outlet />
      <Footer />
    </>
  );
};

export default MainLayout;
