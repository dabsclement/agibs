const express = require('express');
const path = require("path");

const router = express.Router();
module.exports = router;

//route for homepage
router.get('/', function (req, res){

    res.render('pages/index');
});
//router for blog
router.get('/blog', function (req, res){
    res.render('pages/blog');
});