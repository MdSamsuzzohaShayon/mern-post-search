const express = require('express');
const router = express.Router();



// GETTING ALL POSTES
router.get('/', (req, res, next)=>{
    console.log("getting all postes");
    res.status(200).json({
        post: "get all the post"
    });
});


module.exports = router;