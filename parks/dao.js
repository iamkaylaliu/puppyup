import model from "./model.js";

export const findAllParks = () => model.find();
export const findParkById = (id) => model.findById(id); //model.find({ _id: id });
export const createPark = (park) => model.create(park);
export const updatePark = (id, park) =>
  model.updateOne({ _id: id }, { $set: park });
export const deletePark = (id) => model.deleteOne({ _id: id });