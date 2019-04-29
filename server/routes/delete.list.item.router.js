const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const axios = require('axios')


router.delete('/:id', (req, res) => {
    let id = req.params.id
    const sqlText = 'DELETE FROM "list_contents" WHERE id = $1';
    pool.query(sqlText, [id])
      .then(() => { res.sendStatus(200); })
      .catch((err) => {
        console.log('Error deleting item', err);
        res.sendStatus(500);
      });
  });

  module.exports = router;