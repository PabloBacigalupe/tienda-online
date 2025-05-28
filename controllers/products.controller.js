const product = require("../models/products.model");

const getAllProducts = async (req, res) => {
  try {
    const products = await product.getAllProducts();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ error: "Error en la BBDD" });
  }
};

const getCompany = async (req, res) => {
  const companyToSearch = req.params.company;
  try {
    const result = await product.getCompany({ company: companyToSearch });
    if (result.length > 0) {
      res.status(200).json(result[0]);
    } else {
      res.status(404).json({ message: "Compañía no encontrada" });
    }
  } catch (error) {
    console.error("Error al buscar la compañía:", error.message);
    res.status(500).json({ error: "Error en la BBDD" });
  }
};

const deleteProduct = async (req, res) => {
  try {
    const { id_product } = req.params;

    const result = await product.deleteProduct(id_product); 
    res.json({ success: true, deleted: result });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al borrar el producto' });
  }
};

const updateProduct = async (req, res) => {
  const modifiedProduct = req.body;
  if (
    "title" in modifiedProduct &&
    "company" in modifiedProduct &&
    "description" in modifiedProduct &&
    "category" in modifiedProduct &&
    "price" in modifiedProduct &&
    "image_url" in modifiedProduct &&
    "old_title" in modifiedProduct
  ) {
    try {
      const response = await product.updateProduct(modifiedProduct);
      res.status(200).json({
        items_updated: response,
        data: modifiedProduct,
      });
    } catch (error) {
      res.status(500).json({ error: "Error en la BBDD" });
    }
  } else {
    res.status(400).json({ error: "Faltan campos en la entrada" });
  }
};

const insertProduct = async (req, res) => {
  const newProduct = req.body;
  if (
    "title" in newProduct &&
    "company" in newProduct &&
    "description" in newProduct &&
    "category" in newProduct &&
    "price" in newProduct &&
    "image_url" in newProduct
  ) {
    try {
      const response = await product.insertProduct(newProduct);
      res.status(200).json({
        items_updated: response,
        data: newProduct,
      });
    } catch (error) {
      res.status(500).json({ error: "Error en la BBDD" });
    }
  } else {
    res.status(400).json({ error: "Faltan campos en la entrada" });
  }
};

module.exports = {
  getAllProducts,
  getCompany,
  deleteProduct,
  updateProduct,
  insertProduct,
};