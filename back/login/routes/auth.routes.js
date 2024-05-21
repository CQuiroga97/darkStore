authService = require("../services/auth.service");
const express = require("express");
const router = express.Router();
const app = express();

app.use(express.urlencoded({extended: false}));
app.use(express.json());


router.post("/auth", async (req, res)=>{
    return authService.login(req,res);
})

router.get("/auth", async (req, res)=>{
    return authService.validateToken(req,res);
})

module.exports = router;