import * as dao from "./dao.js";

function LikesRoutes(app) {
  const findAllLikes = async (req, res) => {};
  const createUserLikesItem = async (req, res) => {
    const userId = req.params.userId;
    const itemId = req.params.itemId;
    const likes = await dao.createUserLikesItem(userId, itemId);
    res.json(likes);
  };
  const deleteUserLikesItem = async (req, res) => {
    const userId = req.params.userId;
    const itemId = req.params.itemId;
    const status = await dao.deleteUserLikesItem(userId, itemId);
    res.json(status);
  };
  const findUsersThatLikeItem = async (req, res) => {
    const itemId = req.params.itemId;

    const likes = await dao.findUsersThatLikeItem(itemId);
    res.json(likes);
  };
  const findItemsThatUserLikes = async (req, res) => {
    const userId = req.params.userId;
    const likes = await dao.findItemsThatUserLikes(userId);
    res.json(likes);
  };
  app.get("/api/likes", findAllLikes);
  app.post("/api/users/:userId/likes/:itemId", createUserLikesItem);
  app.delete("/api/users/:userId/likes/:itemId", deleteUserLikesItem);
  app.get("/api/likes/:itemId/users", findUsersThatLikeItem);
  app.get("/api/users/:userId/likes", findItemsThatUserLikes);
}

export default LikesRoutes;