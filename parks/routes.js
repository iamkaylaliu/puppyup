import * as dao from "./dao.js";

function ParkRoutes(app) {
  const findAllParks = async (req, res) => {
    const parks = await dao.findAllParks();
    res.json(parks);
  };
  const findParkById = async (req, res) => {
    const id = req.params.id;
    const park = await dao.findParkById(id);
    res.json(park);
  };

  const updatePark = async (req, res) => {
    const id = req.params.id;
    const newPark = req.body;
    const updatedPark = await dao.updatePark(id, newPark);
    res.json(updatedPark);
  };

  const deletePark = async (req, res) => {
    const id = req.params.id;
    const status = await dao.deletePark(id);
    res.json(status);
  };

  const createPark = async (req, res) => {
    const newPark = {
      ...req.body,
    }
    const park = await dao.createPark(newPark);
    res.json(park);
  }


  app.delete("/api/parks/:id", deletePark);
  app.get("/api/parks", findAllParks);
  app.get("/api/parks/:id", findParkById)
  app.put("/api/parks/:id", updatePark);
  app.post("/api/parks", createPark);
}

export default ParkRoutes;