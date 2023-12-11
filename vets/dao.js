import model from "./model.js";

export const findAllVets = () => model.find();
export const findVetById = (id) => model.findById(id); //model.find({ _id: id });
export const createVet = (vet) => model.create(vet);
export const updateVet = (id, vet) =>
  model.updateOne({ _id: id }, { $set: vet });
export const deleteVet = (id) => model.deleteOne({ _id: id });