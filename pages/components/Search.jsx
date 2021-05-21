import styles from '../../styles/Home.module.css'

const Search = () => {
  return (
    <div className={styles.grid}>
      <input type="text" id="query" name="query" required size="10" />
      <button>Search</button>
    </div>
  )
}

export default Search;