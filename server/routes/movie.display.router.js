const express = require('express');
// const pool = require('../modules/pool');
const router = express.Router();
const axios = require('axios')




router.get('/:id', (req, res) => {
        console.log(process.env.OMDB_API_KEY);
        let keyword = req.params.searchterm
        let urlVar = `http://www.omdbapi.com/?apikey=${process.env.OMDB_API_KEY}&i=${id}`;
        axios.get(urlVar)
        .then( (response) => {
        console.log(response.data);
        res.send(response.data)
        })
        .catch( (error) => {
        res.sendStatus(500);
        });
});

/**
 * POST route template
 */
router.post('/', (req, res) => {

});

module.exports = router;