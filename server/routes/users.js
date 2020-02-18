// var express = require('express');
// var router = express.Router();
import express from 'express'
const router = express.Router()

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.status(200).json({ data: [1,2,3] });
});

module.exports = router;
