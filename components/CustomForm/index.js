import styles from "./index.module.scss";

export const CustomForm = ({ status, onValidated }) => {
  let email;
  const submit = () => onValidated({ EMAIL: email.value });

  return (
    <div className={styles.FormBox}>
      <input
        ref={(node) => (email = node)}
        type="email"
        placeholder="Email-Adresse"
      />
      <button onClick={submit}>Senden</button>
      {status === "sending" && <div>sending...</div>}
      {status === "error" && (
        <div className={styles.error}>Das hat nicht geklappt</div>
      )}
      {status === "success" && (
        <div className={styles.success}>Email wurde erfasst</div>
      )}
    </div>
  );
};
