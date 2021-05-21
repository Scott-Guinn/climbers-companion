const { Pool } = require('pg');

const pool = new Pool({
  user: 'scottguinn',
  host: 'localhost',
  database: 'climb',
  port: 5432,
});

const sampleQuery = (callback) => {
  pool.query('SELECT * from destinations;')
    .then((results) => {
      callback(results);
    })
}

module.exports = {
  sampleQuery,
};
