import styles from "./Search.module.css";

const Search = () => {
  return (
    <div className={styles.headerSmall}>
      <div className={styles.container}>
        <form action="result.html" method="">
          <input
            type="text"
            name="name"
            className={styles.field}
            placeholder="Type your product.."
          />
          <button type="submit" className={styles.submit}>
            Search
          </button>
        </form>
      </div>
    </div>
  );
};

export default Search;
