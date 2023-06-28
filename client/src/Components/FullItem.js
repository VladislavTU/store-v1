import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import styles from './fullItem.module.css';

function FullItem({ products, addOnCart }) {
  let item;
  const param = useParams();
  const navigate = useNavigate();
  console.log(param.name);
  item = products.find((item) => `${item?.id}` === param.name);
  useEffect(() => {
    if (!item) {
      return navigate('/');
    }
  }, [item, navigate]);
  return (
    <div className="container">
      <div className={styles.fullItem}>
        <h2 className={styles.fullItemName}>{item?.attributes.title}</h2>
        <img
          className={styles.fullItemImg}
          src={
            process.env.REACT_APP_UPLOAD_URL +
            item?.attributes.img.data.attributes.url
          }
          alt="item"
        />
        <p className={styles.fullItemDescription}>
          {item?.attributes.description}
        </p>
        <div className={styles.fullItemPriceAndButton}>
          <p className={styles.fullItemPrice}>{item?.attributes.price}$</p>
          <p
            className={styles.fullItemAddCartBtn}
            onClick={() => addOnCart(item)}
          >
            Add to cart
          </p>
        </div>
      </div>
    </div>
  );
}

export default FullItem;
