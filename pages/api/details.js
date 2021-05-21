// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
var db = require('../../db');

export default (req, res) => {
  db.sampleQuery((results) => {
    res.status(200).json(results);
  })
  // res.status(200).json({ emergency: 'Red Rock...' })
}
