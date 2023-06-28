import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styles from "./fullItem.module.css";

function FullItem({ items, addOnCart }) {
  let item;
  const param = useParams();
  const navigate = useNavigate();
  item = items.find((item) => item.name === param.name);
  useEffect(() => {
    if (!item) {
      return navigate("/");
    }
  }, [item, navigate]);
  return (
    <div className="container">
      <div className={styles.fullItem}>
        <h2 className={styles.fullItemName}>{item?.name}</h2>
        <img className={styles.fullItemImg} src={item?.url} alt="item" />
        <p className={styles.fullItemDescription}>{item?.descriptionLong}</p>
        <div className={styles.fullItemPriceAndButton}>
          <p className={styles.fullItemPrice}>{item?.price}$</p>
          <p className={styles.fullItemAddCartBtn} onClick={() => addOnCart(item)}>
            Add to cart
          </p>
        </div>
      </div>
    </div>
  );
}

export default FullItem;
