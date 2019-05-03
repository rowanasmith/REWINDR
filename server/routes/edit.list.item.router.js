const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const axios = require('axios')

router.put('/', (req, res) => {
    const release = req.body;
    console.log(req.body);
    
    const queryText = `UPDATE list_contents SET user_notes = $1
    WHERE id = $2;`;
    ;
    const queryValues = [
      release.user_notes,
      release.release_id,
    ];
    pool.query(queryText, queryValues)
      .then(() => { res.sendStatus(201); })
      .catch((err) => {
        console.log('Error adding new project', err);
        res.sendStatus(500);
      });
  });

  module.exports = router;