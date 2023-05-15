import styles from "./cart.module.css";
import { IoMdCloseCircleOutline } from "react-icons/io";

function Cart({ cartOpen, items, onCartItems, deleteFromCart }) {
  return (
    <div className={styles.cart}>
      <IoMdCloseCircleOutline
        size="2em"
        className={styles.closeBtn}
        onClick={() => cartOpen()}
      />
      {onCartItems.map((el) => (
        <div className={styles.cartItem} key={el.id}>
          <div className={styles.cartImgContainer}>
            <img src={el.url} alt="Item" />
          </div>
          <h4>{el.name}</h4>
          <p className={styles.itemPrice}>{el.price}$</p>
          <p className={styles.deleteBtn} onClick={() => deleteFromCart(el.id)}>
            Delete
          </p>
        </div>
      ))}
      {!!onCartItems.length && (
        <p className={styles.totalPrice}>
          Total price:{" "}
          {onCartItems.reduce((accum, item) => accum + item.price, 0)}$
        </p>
      )}
    </div>
  );
}

export default Cart;
