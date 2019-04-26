const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const axios = require('axios')

router.post('/', (req, res) => {
    const newList = req.body;
    console.log(req.body);
    
    const queryText = `INSERT INTO lists ("user_id", "list_name")
    VALUES ($1, $2)`;
    const queryValues = [
      newList.user_id,
      newList.list_name,
    ];
    pool.query(queryText, queryValues)
      .then(() => { res.sendStatus(201); })
      .catch((err) => {
        console.log('Error adding new project', err);
        res.sendStatus(500);
      });
  });

  module.exports = router;