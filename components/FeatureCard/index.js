import styles from "./index.module.scss";

export const FeatureCard = ({ icon, title, description }) => {
  return (
    <div className={styles.CardContainer}>
      <div className={styles.iconContainer}>{icon}</div>
      <h2 className={styles.bigTitle}>{title}</h2>
      <p className={styles.description}>{description}</p>
    </div>
  );
};
