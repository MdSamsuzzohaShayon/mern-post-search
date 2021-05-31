const express = require('express');
const router = express.Router();
const Post = require('../models/Post');
// const Category = require('../models/Category');




// GETTING ALL POSTES
router.get('/', async (req, res, next) => {
    console.log("Query parameters: ", req.query.tags);
    try {
        let posts = Post.find();
        // SEARCH BY TAGS FROM DATABASE
        if (req.query.tags != null && req.query.tags != '') {
            posts = posts.regex("tags", new RegExp(req.query.tags, 'i'));
        }
        // console.log(posts);
        // if (req.query.title != null && req.query.title != "") {
        //     query = query.regex("title", new RegExp(req.query.title, "i"));
        // }

        const post = await posts.exec();
        res.status(200).json({
            count: post.length,
            posts: post.map(p => {
                return {
                    id: p.id,
                    title: p.title,
                    description: p.description,
                    img_src: p.img_src,
                    category: p.category,
                    tags: p.tags,
                }
            })
        });

    } catch (errors) {
        console.log(errors);
    }



    // Post.find()
    //     .select('title description img_src category tags _id')
    //     .populate('category', 'name') //MARGE ORDER INFO AND GET PRODUCT ALL INFO RATHER THAN ONLY ID
    //     .exec()
    //     .then(docs => {
    //         res.status(200).json({
    //             count: docs.length,
    //             posts: docs.map(doc => {
    //                 return {
    //                     _id: doc._id,
    //                     title: doc.title,
    //                     description: doc.description,
    //                     img_src: doc.img_src,
    //                     category: doc.category,
    //                     tags: doc.tags,
    //                     request: {
    //                         type: 'GET',
    //                         url: 'http://localhost:3000/admin/post/' + doc._id
    //                     }
    //                 }
    //             })
    //         });
    //     })
    //     .catch(err => {
    //         console.log(err);
    //         res.status(500).json({
    //             error: err
    //         });
    //     });
});




// MAKING A POST ASYNC WAY
router.post('/', async (req, res, next) => {

    const { title, description, img_src, category, tags } = req.body;
    const newPost = new Post();
    newPost.title = title;
    newPost.description = description;
    newPost.img_src = img_src; 
    newPost.category = category;
    const tagsList = tags.split(',');
    newPost.tags = tagsList; /// GET VALUE AS ARRAY AND SAVE AS ARRAY
    try {
        const savePost = await newPost.save();
        console.log(savePost);
        res.status(201).json({
            message: "post is been created",
            createdPost: {
                title,
                description,
                img_src,
                category,
                tags:tagsList
            },
            request: {
                type: "GET",
                url: 'http://localhost:4000/admin/post/' + savePost._id
            }
        });
    } catch (error) {
        console.log(error);
    }
});







// GETTING A SINGLE POST
router.get('/:id', async (req, res, next) => {
    try {
        const post = await Post.findById(req.params.id).populate('category').exec();
        console.log(post);
        res.status(200).json({
            message: "Getting single post by id",
            post: {
                post: post,
                // category: post.category,
            }
        });
    } catch (error) {
        console.log(error);
        next(error);
    }
});











// DELETE A POST
router.delete('/:id', async (req, res, next) => {
    try {
        const post = await Post.findByIdAndDelete(req.params.id);
        res.status(200).json({
            message: "post is been deleted",
            post,
            request: {
                type: "DELETE",
                url: "localhost:4000/admin/post" + req.params.id
            }
        });
    } catch (error) {
        console.log(error);
        next(error);
    }
});


module.exports = router;