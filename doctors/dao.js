import model from "./model.js";

export const findAllDoctors = () => model.find();
export const findDoctorById = (id) => model.findById(id); //model.find({ _id: id });
export const createDoctor = (doctor) => model.create(doctor);
export const updateDoctor = (id, doctor) =>
  model.updateOne({ _id: id }, { $set: doctor });
export const deleteDoctor = (id) => model.deleteOne({ _id: id });
export const findDoctorsByVet = (vetId) => model.find({vet: vetId});