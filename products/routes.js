import * as dao from "./dao.js";

function ProductRoutes(app) {
  const findAllProducts = async (req, res) => {
    const products = await dao.findAllProducts();
    res.json(products);
  };
  const findProductById = async (req, res) => {
    const id = req.params.id;
    const product = await dao.findProductById(id);
    res.json(product);
  };

  const updateProduct = async (req, res) => {
    const id = req.params.id;
    const newProduct = req.body;
    const updatedProduct = await dao.updateProduct(id, newProduct);
    res.json(updatedProduct);
  };

  const deleteProduct = async (req, res) => {
    const id = req.params.id;
    const status = await dao.deleteProduct(id);
    res.json(status);
  };

  const createProduct = async (req, res) => {
    const newProduct = {
      ...req.body,
    }
    const product = await dao.createProduct(newProduct);
    res.json(product);
  }

  const findProductsBySeller = async (req, res) => {
    const sellerId = req.params.sellerId;
    const doctors = await dao.findProductsBySeller(sellerId);
    res.json(doctors);
  }


  app.delete("/api/products/:id", deleteProduct);
  app.get("/api/products", findAllProducts);
  app.get("/api/products/:id", findProductById)
  app.put("/api/products/:id", updateProduct);
  app.post("/api/products", createProduct);
  app.get("/api/seller/products/:sellerId",findProductsBySeller);
}

export default ProductRoutes;