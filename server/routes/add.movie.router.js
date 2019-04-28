const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const axios = require('axios')

router.post('/', (req, res) => {
    const newRelease = req.body;
    console.log(req.body);
    
    const queryText = `INSERT INTO list_contents ("release_id", "list_id", "user_notes")
    VALUES ($1, $2, $3)`;
    const queryValues = [
      newRelease.release_id,
      newRelease.list_id,
      newRelease.user_notes,
    ];
    pool.query(queryText, queryValues)
      .then(() => { res.sendStatus(201); })
      .catch((err) => {
        console.log('Error adding new project', err);
        res.sendStatus(500);
      });
  });

  module.exports = router;