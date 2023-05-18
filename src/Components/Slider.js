import { useState } from 'react';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';
import itemsList from '../items/items';
import styles from './slider.module.css';

const Slider = () => {
  const [move, setMove] = useState(0);
  const trans = { transform: `translateX(${move}%)` };
  const setMoveLeftHandler = () => {
    setMove(move + 100);
  };
  const setMoveRightHandler = () => {
    setMove(move - 100);
  };
  return (
    <div className="container">
      <div className={styles.slider}>
        {move < 0 && <AiOutlineArrowLeft
          className={styles.sliderArrows}
          size={30}
          onClick={setMoveLeftHandler}
        />}
        <div className={styles.window}>
          <div className={styles.sliderItemsList} style={trans}>
            {itemsList.map((el) => {
              return (
                <div key={el.id} className={styles.sliderItem}>
                  <img src={el.url} alt={el.name} />
                </div>
              );
            })}
          </div>
        </div>
        {-move < ((itemsList.length - 1) * 100) && <AiOutlineArrowRight
          className={styles.sliderArrows}
          size={30}
          onClick={setMoveRightHandler}
        />}
      </div>
    </div>
  );
};

export default Slider;
