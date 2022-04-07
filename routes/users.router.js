const { Router } = require("express");

const usersRouter = Router();

usersRouter.get("/login", (req, res) => {
    res.send("<h1> Login Successful!</h1>");
})

usersRouter.get("/resgister", (req, res) => {
    res.send("<h1>Register Here!</h1>");
});

module.exports = usersRouter;