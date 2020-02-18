// var express = require('express');
// var router = express.Router();
import express from 'express'
import { sleep, CommonError } from '../utils'
const router = express.Router()

/* GET home page. */
router.get('/', async (req, res, next) => {
    await sleep(3000);
    try {
        throw new CommonError(1,2,3)
    } catch (err) {
        res.status(500).send(err)
    }
    res.status(200).send('waited 3sec and hello world');
});

module.exports = router;
