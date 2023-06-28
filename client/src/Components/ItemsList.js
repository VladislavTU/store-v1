import Item from './Item';
import styles from './ItemsList.module.css';

function ItemsList({ products, addOnCart }) {
  return (
    <div className="container">
      <div className={styles.items}>
        <Item products={products} addOnCart={addOnCart} />
      </div>
    </div>
  );
}

export default ItemsList;
