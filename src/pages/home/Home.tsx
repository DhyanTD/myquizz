import styles from "./home.module.css";

function Home() {
  return (
    <>
      <div className={styles.homeMain}>
        <div className={styles.homeTitle}>
          <p>Quizzes</p>
        </div>

        <div className={styles.homeDropdown}>
          <select name="filter" id="filter">
            <option value="newest">Newest</option>
            <option value="oldest">Oldest</option>
            
          </select>
        </div>
      </div>
    </>
  );
}
export default Home;
