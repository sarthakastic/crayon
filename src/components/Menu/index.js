import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEraser,
  faFileArrowDown,
  faPen,
  faRotateLeft,
  faRotateRight,
} from "@fortawesome/free-solid-svg-icons";
import styles from "./index.module.css";

const Menu = () => {
  return (
    <div className={styles.menuContainer}>
      <div className={styles.iconWrapper}>
        <FontAwesomeIcon className={styles.icon} icon={faPen} />
      </div>
      <div className={styles.iconWrapper}>
        <FontAwesomeIcon className={styles.icon} icon={faEraser} />
      </div>
      <div className={styles.iconWrapper}>
        <FontAwesomeIcon className={styles.icon} icon={faRotateLeft} />
      </div>
      <div className={styles.iconWrapper}>
        <FontAwesomeIcon className={styles.icon} icon={faRotateRight} />
      </div>
      <div className={styles.iconWrapper}>
        <FontAwesomeIcon className={styles.icon} icon={faFileArrowDown} />
      </div>
    </div>
  );
};

export default Menu;
