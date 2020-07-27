const express = require('express');
const Router = express.Router();

const tws = [
    {id: 0, message: 'Test 1'}, 
    {id: 12, message: 'Test 2'},
    {id: 56, message: 'Test 3'}
];

Router.get('/', (req, res) => {
    res.render('tws', {
        tws: tws,
    });
});

module.exports = Router;