import * as dao from "./dao.js";

function VetRoutes(app) {
  const findAllVets = async (req, res) => {
    const vets = await dao.findAllVets();
    res.json(vets);
  };
  const findVetById = async (req, res) => {
    const id = req.params.id;
    const vet = await dao.findVetById(id);
    res.json(vet);
  };

  const updateVet = async (req, res) => {
    const id = req.params.id;
    const newVet = req.body;
    const updatedVet = await dao.updateVet(id, newVet);
    res.json(updatedVet);
  };
  
  const deleteVet = async (req, res) => {
    const id = req.params.id;
    const status = await dao.deleteVet(id);
    res.json(status);
  };

  const createVet = async (req, res) => {
    const newVet = {
        ...req.body,
    }
    const vet = await dao.createVet(newVet);
    res.json(vet);
}


  app.delete("/api/vets/:id", deleteVet);
  app.get("/api/vets", findAllVets);
  app.get("/api/vets/:id", findVetById)
  app.put("/api/vets/:id", updateVet);
  app.post("/api/vets", createVet);
}

export default VetRoutes;