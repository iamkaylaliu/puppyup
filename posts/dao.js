import model from "./model.js";

export const findAllPosts = () => model.find();
export const createUserPosts = (post) =>
  model.create(post);
export const deleteUserPostsItem = (postId) =>
  model.findByIdAndDelete(postId);
export const findPostsByUser = (userId) =>
  model.find({ user: userId }).populate("user");
export const findPostsByItem = (itemId) => model.find({ itemId: itemId }).populate("user");
export const generateRandomPosts = async () => {
  const posts = await model.aggregate([{ $sample: { size: 10 } }]);
  const populatedPosts = await model.populate(posts, { path: 'user' });
  return populatedPosts;
};
export const updatePost = (postId, post) => model.findOneAndUpdate({ _id: postId }, { $set: post });