import { Link } from 'react-router-dom';
import styles from './item.module.css';
import { useEffect, useState } from 'react';


function Item({ products, addOnCart }) {


  return products.map((el) => (
    <div className={styles.item} key={el?.id}>
      <h4>{el?.attributes.title}</h4>
      <div className={styles.itemImgContainer}>
        <Link to={el?.attributes.title}>
          {' '}
          <img
            src={
              process.env.REACT_APP_UPLOAD_URL +
              el?.attributes.img.data.attributes.url
            }
            alt="Item"
          />{' '}
        </Link>
      </div>
      <p>{el?.attributes.descriptionShort}</p>
      <div className={styles.cartAndPrice}>
        <p className={styles.itemPrice}>{el?.attributes.price}$</p>
        <p className={styles.addCartBtn} onClick={() => addOnCart(el)}>
          Add to cart
        </p>
      </div>
    </div>
  ));

  /* items.map((el) => (
    <div className={styles.item} key={el.id}>
      <h4>{el.name}</h4>
      <div className={styles.itemImgContainer}>
        <Link to={el.name}>
          {' '}
          <img src={el.url} alt="Item" />{' '}
        </Link>
      </div>
      <p>{el.description}</p>
      <div className={styles.cartAndPrice}>
        <p className={styles.itemPrice}>{el.price}$</p>
        <p className={styles.addCartBtn} onClick={() => addOnCart(el)}>
          Add to cart
        </p>
      </div>
    </div>
  )); */
}

export default Item;
