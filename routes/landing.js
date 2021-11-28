const express = require("express");
const router = express.Router();

router.get('/', (req,res)=>{
    res.send("Part 2")
})

module.exports = router;