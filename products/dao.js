import model from "./model.js";

export const findAllProducts = () => model.find();
export const findProductById = (id) => model.findById(id); //model.find({ _id: id });
export const createProduct = (product) => model.create(product);
export const updateProduct = (id, product) =>
  model.updateOne({ _id: id }, { $set: product });
export const deleteProduct = (id) => model.deleteOne({ _id: id });
export const findProductsBySeller = (sellerId) => model.find({seller: sellerId});