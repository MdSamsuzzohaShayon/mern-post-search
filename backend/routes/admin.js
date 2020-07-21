const express = require('express');
const router = express.Router();
const Category = require('../models/Category');

/* GET ADMIN home page. */
  // MAKING REQUEST FOR LISTING ALL POST
router.get('/', (req, res, next) =>{
  const post_list = {
    "title": "this is title",
    "cat": "this is category",
    "desc": "this is desc"
  }
  res.status(200).json(post_list);
});


// MAKING POST CATEGORY
router.post('/category', (req, res, next)=>{
  // GETTING SUGGETIONS
  // https://github.com/MdSamsuzzohaShayon/nodejs-rest-api/blob/upload_file/api/routes/products.js
  // https://github.com/MdSamsuzzohaShayon/nodejs-mvc-production
  const newCategory = new Category({
    name: req.body.name
  });
  newCategory.save()
});

module.exports = router;
