const { Pool } = require('pg');

const pool = new Pool({
  user: 'scottguinn',
  host: 'localhost',
  database: 'climb',
  port: 5432,
});

const sampleQuery = (callback) => {
  pool.query('SELECT * from destinations;')
    .then(({rows}) => {
      callback(rows);
    })
}

module.exports = {
  sampleQuery,
};
