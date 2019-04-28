const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const axios = require('axios')

router.get('/:id', (req, res) => {
    let id = req.params.id

    const queryText = `SELECT * FROM list_contents WHERE list_id = $1;`
    pool.query(queryText, [id])
      .then((result) => { res.send(result.rows); })
      .catch((err) => {
        console.log('Error completing SELECT releases query', err);
        res.sendStatus(500);
      });
  });

  module.exports = router;