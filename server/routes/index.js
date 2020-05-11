// var express = require('express');
// var router = express.Router();
import express from "express";
import { sleep, CommonError } from "../utils";
const router = express.Router();

/* GET home page. */
router.get("/", async (req, res, next) => {
	const x = {
		ip: req.ip,
		ips: req.ips,
		remoteAddress: req.connection.remoteAddress,
		"x-forwarded-fpr": req.headers["x-forwarded-for"],
		"x-real-ip": req.headers["x-real-ip"],
	};
	res.status(200).json(x);
});

module.exports = router;
