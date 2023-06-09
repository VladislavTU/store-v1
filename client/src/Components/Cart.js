import styles from "./cart.module.css";
import { IoMdCloseCircleOutline } from "react-icons/io";

function Cart({ cartOpen, onCartItems, deleteFromCart }) {
  return (
    <div className={styles.cart}>
      <IoMdCloseCircleOutline
        size="2em"
        className={styles.closeBtn}
        onClick={() => cartOpen()}
      />
      {onCartItems.map((el) => (
        <div className={styles.cartItem} key={el?.id}>
          <div className={styles.cartImgContainer}>
            <img src={process.env.REACT_APP_UPLOAD_URL +
              el?.attributes.img.data.attributes.url} alt="Item" />
          </div>
          <h4>{el?.attributes.title}</h4>
          <p className={styles.itemPrice}>{el?.attributes.price}$</p>
          <p className={styles.deleteBtn} onClick={() => deleteFromCart(el?.id)}>
            Delete
          </p>
        </div>
      ))}
      {!!onCartItems.length && (
        <p className={styles.totalPrice}>
          Total price:{" "}
          {onCartItems.reduce((accum, el) => accum + el?.attributes.price, 0)}$
        </p>
      )}
    </div>
  );
}

export default Cart;
