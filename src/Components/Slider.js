import { useState } from 'react';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';
import itemsList from '../items/items';
import styles from './slider.module.css';
import avatars from '../items/avatars';

const Slider = () => {
  const [move, setMove] = useState(0);
  const trans = { transform: `translateX(${move}%)` };
  const setMoveLeftHandler = () => {
    setMove(move + 101);
  };
  const setMoveRightHandler = () => {
    setMove(move - 101);
  };
  return (
    <div className="container">
      <div className={styles.slider}>
        <div className={styles.arrowContainer}>
          {move < 0 && (
            <AiOutlineArrowLeft
              className={styles.sliderArrows}
              size="30%"
              onClick={setMoveLeftHandler}
            />
          )}
        </div>
        <div className={styles.window}>
          <div className={styles.sliderItemsList} style={trans}>
            {avatars.map((el) => {
              return (
                <div key={el.id} className={styles.sliderItem}>
                  <img src={el.url} alt='avatar' />
                </div>
              );
            })}
          </div>
        </div>
        <div className={styles.arrowContainer}>
          {-move < (itemsList.length) * 101 && (
            <AiOutlineArrowRight
              className={styles.sliderArrows}
              size="30%"
              onClick={setMoveRightHandler}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Slider;
