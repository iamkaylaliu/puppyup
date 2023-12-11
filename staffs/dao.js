import model from "./model.js";

export const findAllStaffs = () => model.find();
export const findStaffById = (id) => model.findById(id); //model.find({ _id: id });
export const createStaff = (staff) => model.create(staff);
export const updateStaff = (id, staff) =>
  model.updateOne({ _id: id }, { $set: staff });
export const deleteStaff = (id) => model.deleteOne({ _id: id });
export const findStaffsByPark = (parkId) => model.find({park: parkId}); //model.find({ _id: id });
