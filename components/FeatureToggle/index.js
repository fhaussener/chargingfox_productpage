import styles from "./index.module.scss";
import classnames from "classnames";

export const FeatureToggle = ({ onClick, isLader }) => {
  return (
    <div className={styles.ToggleContainer}>
      <button
        className={classnames(styles.menuItem, {
          [styles.selected]: isLader,
        })}
        onClick={() => onClick(true)}
      >
        den Lader
      </button>
      <button
        className={classnames(styles.menuItem, {
          [styles.selected]: !isLader,
        })}
        onClick={() => onClick(false)}
      >
        den Vermieter
      </button>
    </div>
  );
};
