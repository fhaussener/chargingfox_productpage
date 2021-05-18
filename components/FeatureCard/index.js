import styles from "./index.module.scss";

export const FeatureCard = ({ icon, title, description }) => {
  return (
    <div className={styles.CardContainer}>
      <div className={styles.iconContainer}>{icon}</div>
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  );
};
