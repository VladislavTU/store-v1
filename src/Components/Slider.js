import itemsList from '../items/items';
import styles from './slider.module.css';

const windowStyle = {
  width: '33%',
};

const Slider = () => {
  return (
    <div className="container">
      <div className={styles.slider}>
        <div className={styles.window} style={windowStyle}>
          <div className={styles.sliderItemsList}>
            {itemsList.map((el) => {
              return (
                <div key={el.id} className={styles.sliderItem}>
                  <img src={el.url} alt={el.name} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
