const express = require('express');
const router = express.Router();
const Category = require('../models/Category');
const { get } = require('mongoose');





// GETTING SINGLE CATEGORY
router.get('/', async (req, res, next) => {
  console.log("working");
  let allCategory = await Category.find();
  try {
    res.status(200).json({
      category: allCategory.map(c=>{
        return {
          id: c._id,
          name: c.name
        }
      })
    });
  } catch (error) {
    console.log(error);
  }
});

// router.get('/', async (req, res, next) => {
//   console.log("get req for post");
//   let post = Post.find();
//   try {
//       let allPost = await post.select("title description category tags").populate('name').exec();
//       console.log(allPost);
//       res.status(200).json({
//           message: "getting all posts",
//           posts: allPost.map(p => {
//               return {
//                   post: p.title,
//                   category: p.category
//               }
//           }),
//           request: {
//               type: "GET",
//               url: "localhost:4000/admin/post"
//           }
//       });
//   } catch (error) {
//       console.log(error);
//   }
// });




// MAKING POST CATEGORY
router.post('/', (req, res, next) => {
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



























// GETTING SINGLE CATEGORY
router.get('/:id', (req, res, next) => {
  console.log("ID: " + req.body.id);
  Category.findById(req.params.id)
    .select('name _id')
    .exec()
    .then(docs => {
      console.log(docs);
      if (docs) {
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
      console.log(`Error to read category: ${err}`);
    });

});


/*








// UPDATING POST CATEGORY
router.put('/:id', (req, res, next) => {
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
router.delete('/:id', (req, res, next) => {
  let id = req.params.id;
  Category.findByIdAndDelete({ _id: id })
    .exec()
    .then(docs => {
      console.log(docs);
      res.status(200).json({
        message: "deleted successfully",
        name: docs.name,
        id,
        request: {
          type: "GET",
          url: 'http://localhost:4000/admin/category/' + id
        }
      })
    })
    .catch(err => {
      console.log(`Error to delete category: ${err}`);
    });
});



module.exports = router;
