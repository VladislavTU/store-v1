import { AiOutlineCopyrightCircle } from 'react-icons/ai';
import styles from './footer.module.css';

function Footer() {
  return (
    <div className={styles.footer}>
      <div className="container">
        <div className={styles.footerInner}>
          <div className={styles.copyright}>
            <AiOutlineCopyrightCircle />
            <p>2023</p>
          </div>
          <p className={styles.footerStoreName}>Tool Store</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
