const express = require("express");
const router = express.Router();
const Post = require("../models/Post");

router.get("/", async (req, res) => {
    try {
        const posts = await Post.find(); // find gives you entire list of objects inside
        // your give `POST` model
        res.json(posts);
    } catch (err) {
        console.log(err);
    }
    // res.send("ON GET POSTS");
});

router.get("/:postId", async (req, res) => {
    try {
        console.log(req.params);
        const post = await Post.findById(req.params.postId); // inbuilt mongoose function
        // find a singular elemnt by id
        res.json(post);
    } catch (err) {
        console.log(err);
    }
});

router.post("/", async (req, res) => {
    try {
        const post = new Post({
            title: req.body.title,
            description: req.body.description,
        });
        post.save()
            .then((data) => {
                res.json(data);
            })
            .catch((err) => {
                console.log(err);
            });
    } catch (err) {
        console.log(err);
    }
});

router.delete("/:postId", async (req, res) => {
    try {
        const removedPost = await Post.deleteOne({ _id: req.params.postId });
        res.json(removedPost);
    } catch (err) {
        console.log(err);
    }
});

router.patch("/:postId", async (req, res) => {
    try {
        console.log(req.params);
        const updatedPost = await Post.updateOne(
            { _id: req.params.postId },
            { $set: { title: req.body.title } }
        );
        res.json(updatedPost);
    } catch (err) {
        console.log(err);
    }
});

module.exports = router;
