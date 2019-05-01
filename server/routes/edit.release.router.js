const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const axios = require('axios')

router.put('/', (req, res) => {
    const release = req.body;
    console.log(req.body);
    
    const queryText = `UPDATE releases SET company = $1, release_year = $2, 
    release_notes = $3, catalog_number = $4, release_title = $5
    WHERE id = $6;`;
    ;
    const queryValues = [
      release.company,
      release.release_year,
      release.release_notes,
      release.catalog_number,
      release.release_title,
      release.release_id
    ];
    pool.query(queryText, queryValues)
      .then(() => { res.sendStatus(201); })
      .catch((err) => {
        console.log('Error adding new project', err);
        res.sendStatus(500);
      });
  });

  module.exports = router;