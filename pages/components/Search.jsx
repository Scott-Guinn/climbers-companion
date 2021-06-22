import {useState} from 'react';
import styles from '../../styles/Home.module.css'

const Search = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleChange = (e) => {
    setSearchQuery(e.target.value);
  }

  const handleClick = () => {
    setSearchQuery('');
  }

  return (
    <div className={styles.grid} style={{width: "85%"}}>
      <input type="text" id="query" name="query" required size="10" value={searchQuery} onChange={handleChange}/>
      <button onClick={handleClick}>Search</button>
    </div>
  )
}

export default Search;