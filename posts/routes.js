import * as dao from "./dao.js";

function PostsRoutes(app) {
    const findAllPosts = async (req, res) => {
        const posts = await dao.findAllPosts();
        res.json(posts);
    }

    const createUserPosts = async (req, res) => {
        const newPost = {
            ...req.body,
            time: new Date().getTime()
        }
        const post = await dao.createUserPosts(newPost);
        res.json(post);
    }

    const deleteUserPostsItem = async (req, res) => {
        const status = await dao.deleteUserPostsItem(req.params.postId);
        res.json(status);
    }
  
    const findPostsByUser = async (req,res) => {
        const posts = await dao.findPostsByUser(req.params.userId);
        res.json(posts);
    }
    
    const findPostsByItem = async (req,res) => {
        const posts = await dao.findPostsByItem(req.params.itemId);
        res.json(posts);
    }

    const generateRandomPosts = async (req,res) => {
        const posts = await dao.generateRandomPosts();
        res.json(posts);
    }

    const updatePost = async (req, res) => {
        const postId = req.params.postId;
        const newPost = req.body;
        const updatedPost = await dao.updatePost(postId, newPost);
        res.json(updatedPost);
    };
    app.get("/api/posts", findAllPosts);
    app.post("/api/posts", createUserPosts);
    app.delete("/api/posts/:postId", deleteUserPostsItem);
    app.get("/api/posts/:userId", findPostsByUser);
    app.get("/api/posts/item/:itemId", findPostsByItem);
    app.get("/api/random", generateRandomPosts);
    app.put("/api/posts/:postId", updatePost);
}

export default PostsRoutes;
