const express = require('express');
const router = express.Router();
const Category = require('../models/Category');
const { get } = require('mongoose');

/* GET ADMIN home page. */
// MAKING REQUEST FOR LISTING ALL POST CATEGORY
router.get('/category', (req, res, next) => {
  Category.find()
    .select('name _id')
    .exec()
    .then(docs => {
      console.log(docs);
      res.status(200).json({
        message: "showing all category",
        category: docs.map(doc => {
          return {
            name: doc.name,
            id: doc._id,
            request: {
              type: 'Get',
              url: 'http://localhost:4000/admin/category/' + doc._id
            }
          }
        })
      }
      );
    })
    .catch(
      err => {
        console.log(`Error to show category: ${err}`);
      }
    )
  // res.status(200).json(post_list);
});







// MAKING POST CATEGORY
router.post('/category', (req, res, next) => {
  // GETTING SUGGETIONS
  // https://github.com/MdSamsuzzohaShayon/nodejs-rest-api/blob/upload_file/api/routes/products.js
  // https://github.com/MdSamsuzzohaShayon/nodejs-mvc-production
  const newCategory = new Category({
    name: req.body.name
  });
  newCategory.save()
    .then(result => {
      console.log(result);
      res.status(201).json({
        message: "Category is been created",
        createdCategory: {
          name: result.name,
          id: result._id,
          request: {
            type: "GET",
            url: 'http://localhost:4000/admin/category/' + result._id
          }
        }
      })
    })
    .catch(err => {
      console.log(`Error to create category: ${err}`);
    });
});










/*
// GETTING SINGLE CATEGORY
router.get('/category/:id', (req, res, next)=>{
  Category.findById(req.params.id)
  .select('name _id')
  .exec()
  .then(docs=>{
    console.log(docs);
    if(docs){
      res.status(200).json({
        name: docs.name,
        id: docs._id,
        request: {
          type: "GET",
          url: 'http://localhost:4000/admin/category/' + docs._id
        }
      });
    }
  })
  .catch(err => {
    console.log(`Error to create category: ${err}`);
  });

});











// UPDATING POST CATEGORY
router.put('/category/:id', (req, res, next) => {
  console.log(req.params.id);
  const id = req.params.id;
  Category.updateOne({ _id: id }, {
    name: req.body.name
  })
    .exec()
    .then(docs => {
      console.log(docs);
      res.status(200).json({
        message: "Update category successfully",
        updatedCategory: {
          name: req.body.name,
          id,
          request: {
            type: "GET",
            url: 'http://localhost:4000/admin/category/'+id
          }
        }
      });
    })
    .catch(err => {
      console.log(`Error to update category: ${err}`);
    });
});
*/









// DELETE CATEGORY
router.delete('/category/:id', (req, res, next)=>{
  let id= req.params.id;
  Category.findByIdAndDelete({_id: id})
    .exec()
    .then(docs=>{
      console.log(docs);
      res.status(200).json({
        message: "deleted successfully",
        name: docs.name,
        id,
        request: {
          type: "GET",
          url: 'http://localhost:4000/admin/category/'+id
        }
      })
    })
    .catch(err => {
      console.log(`Error to delete category: ${err}`);
    });
});



module.exports = router;
