const product = require("../models/products.model"); 

const getAllProducts = async (req, res) => {
  let products;
  try {
    products = await product.getAllProducts();
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
  const deleteProduct = req.body; // {title}
  if ("title" in deleteProduct) {
    try {
      const response = await product.deleteProduct(deleteProduct);
      res.status(200).json({
        items_updated: response,
        data: deleteProduct,
      });
    } catch (error) {
      res.status(500).json({ error: "Error en la BBDD" });
    }
  } else {
    res.status(400).json({ error: "Faltan campos en la entrada" });
  }
};

const updateProduct = async (req, res) => {
  const modifiedProduct = req.body; // {title, company, description, category, price, image_url, old_title}
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
  const newProduct = req.body; // {title, company, description, category, price, image_url}
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