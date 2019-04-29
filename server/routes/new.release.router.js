const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const axios = require('axios')

router.post('/', (req, res) => {
    const newRelease = req.body;
    console.log(req.body);
    
    const queryText = `INSERT INTO releases ("imdb_id", "image_url", "company", "release_year", "release_notes", "catalog_number", "release_title")
    VALUES ($1, $2, $3, $4, $5, $6, $7)`;
    const queryValues = [
      newRelease.imdb_id,
      newRelease.image_url,
      newRelease.company,
      newRelease.release_year,
      newRelease.release_notes,
      newRelease.catalog_number,
      newRelease.release_title,
    ];
    pool.query(queryText, queryValues)
      .then(() => { res.sendStatus(201); })
      .catch((err) => {
        console.log('Error adding new project', err);
        res.sendStatus(500);
      });
  });

  module.exports = router;