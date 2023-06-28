import { FaTools } from 'react-icons/fa';
import { BsCart4 } from 'react-icons/bs';
import styles from './header.module.css';
import { Link, NavLink } from 'react-router-dom';
import Cart from './Cart';

function Header({ cartOpen, onCart, products, deleteFromCart, cartState }) {
  return (
    <div className={styles.header}>
      <div className={styles.headerUpper}>
        <div className="container">
          <div className={styles.headerTop}>
            <FaTools size="2em" className={styles.logo} />
            <div className={styles.headerMenu}>
              <div className={styles.cartArea}>
                <BsCart4
                  className={styles.cartIcon}
                  size="1.5em"
                  onClick={() => cartOpen()}
                />
                {!!onCart.length && (
                  <p className={styles.cartValue}>{onCart.length}</p>
                )}
              </div>
              <nav className={styles.headerMenuNav}>
                <NavLink to="/" className={styles.headerMenuItem}>
                  Сatalog
                </NavLink>
                <NavLink to="about" className={styles.headerMenuItem}>
                  About us
                </NavLink>
                <NavLink to="contacts" className={styles.headerMenuItem}>
                  Contacts
                </NavLink>
                <NavLink to="account" className={styles.headerMenuItem}>
                  User
                </NavLink>
              </nav>
            </div>
          </div>
        </div>
        {cartState && (
          <Cart
            cartOpen={cartOpen}
            onCartItems={onCart}
            deleteFromCart={deleteFromCart}
          />
        )}
      </div>

      <div className={styles.headerImg}>
        <div>
          <Link to="/" className={styles.siteName}>
            <h1>Tool Store</h1>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
