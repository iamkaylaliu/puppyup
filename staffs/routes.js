import * as dao from "./dao.js";

function StaffRoutes(app) {
  const findAllStaffs = async (req, res) => {
    const staffs = await dao.findAllStaffs();
    res.json(staffs);
  };
  const findStaffById = async (req, res) => {
    const id = req.params.id;
    const staff = await dao.findStaffById(id);
    res.json(staff);
  };

  const updateStaff = async (req, res) => {
    const id = req.params.id;
    const newStaff = req.body;
    const updatedStaff = await dao.updateStaff(id, newStaff);
    res.json(updatedStaff);
  };

  const deleteStaff = async (req, res) => {
    const id = req.params.id;
    const status = await dao.deleteStaff(id);
    res.json(status);
  };

  const createStaff = async (req, res) => {
    const newStaff = {
      ...req.body,
    }
    const staff = await dao.createStaff(newStaff);
    res.json(staff);
  }

  const findStaffsByPark = async (req, res) => {
    const parkId = req.params.parkId;
    const staffs = await dao.findStaffsByPark(parkId);
    res.json(staffs);
  };

  app.delete("/api/staffs/:id", deleteStaff);
  app.get("/api/staffs", findAllStaffs);
  app.get("/api/staffs/:id", findStaffById)
  app.put("/api/staffs/:id", updateStaff);
  app.post("/api/staffs", createStaff);
  app.get("/api/park/staffs/:parkId", findStaffsByPark);
}

export default StaffRoutes;