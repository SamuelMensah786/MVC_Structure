// import { Router } from "express";
const indexRouter = require("express").Router();
const { greet, welcome } = require("../controllers/index.controller");

// const indexRouter = Router();

indexRouter.get("/", welcome);
    
    indexRouter.get("/greet", (req, res) => {
        res.send("Hello, Everyone!!!");
    });

module.exports = indexRouter;
