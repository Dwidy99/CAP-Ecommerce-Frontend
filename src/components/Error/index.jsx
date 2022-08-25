import styles from "./Error.module.css";

const Error = () => {
  return (
    <div className={styles.container}>
      <p className={styles.error}>Error, Data not found!</p>
    </div>
  );
};

export default Error;
