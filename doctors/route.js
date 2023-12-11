import * as dao from "./dao.js";

function DoctorRoutes(app) {
  const findAllDoctors = async (req, res) => {
    const doctors = await dao.findAllDoctors();
    res.json(doctors);
  };
  const findDoctorById = async (req, res) => {
    const id = req.params.id;
    const doctor = await dao.findDoctorById(id);
    res.json(doctor);
  };

  const updateDoctor = async (req, res) => {
    const id = req.params.id;
    const newDoctor = req.body;
    const updatedDoctor = await dao.updateDoctor(id, newDoctor);
    res.json(updatedDoctor);
  };

  const deleteDoctor = async (req, res) => {
    const id = req.params.id;
    const status = await dao.deleteDoctor(id);
    res.json(status);
  };

  const createDoctor = async (req, res) => {
    const newDoctor = {
      ...req.body,
    }
    const doctor = await dao.createDoctor(newDoctor);
    res.json(doctor);
  }

  const findDoctorsByVet = async (req, res) => {
    const vetId = req.params.vetId;
    const doctors = await dao.findDoctorsByVet(vetId);
    res.json(doctors);
  }


  app.delete("/api/doctors/:id", deleteDoctor);
  app.get("/api/doctors", findAllDoctors);
  app.get("/api/doctors/:id", findDoctorById)
  app.put("/api/doctors/:id", updateDoctor);
  app.post("/api/doctors", createDoctor);
  app.get("/api/vet/doctors/:vetId", findDoctorsByVet)
}

export default DoctorRoutes;