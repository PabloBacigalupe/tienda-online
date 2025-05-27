const provider = require("../models/providers.model"); 

const getAllProviders = async (req, res) => {
  let result;
  try {
    result = await provider.getAllProviders();
    res.status(200).json(result); // Devuelve lista de proveedores
  } catch (error) {
    console.error("Error al obtener proveedores:", error.message);
    res.status(500).json({ error: "Error en la BBDD" });
  }
};

const insertProvider = async (req, res) => {
  const newProvider = req.body;
  if (
    "company" in newProvider &&
    "cif" in newProvider &&
    "adress" in newProvider
  ) {
    try {
      const result = await provider.insertProvider(newProvider);
      res.status(200).json({
        items_inserted: result,
        data: newProvider
      });
    } catch (error) {
      res.status(500).json({ error: "Error en la BBDD" });
    }
  } else {
    res.status(400).json({ error: "Faltan campos en la entrada" });
  }
};

const updateProvider = async (req, res) => {
  const updatedProvider = req.body;
  if (
    "company" in updatedProvider &&
    "cif" in updatedProvider &&
    "adress" in updatedProvider &&
    "old_company" in updatedProvider
  ) {
    try {
      const result = await provider.updateProvider(updatedProvider);
      res.status(200).json({
        items_updated: result,
        data: updatedProvider
      });
    } catch (error) {
      res.status(500).json({ error: "Error en la BBDD" });
    }
  } else {
    res.status(400).json({ error: "Faltan campos en la entrada" });
  }
};

const deleteProvider = async (req, res) => {
  const deletedProvider = req.body;
  if ("company" in deletedProvider) {
    try {
      const result = await provider.deleteProvider(deletedProvider);
      res.status(200).json({
        items_deleted: result,
        data: deletedProvider
      });
    } catch (error) {
      res.status(500).json({ error: "Error en la BBDD" });
    }
  } else {
    res.status(400).json({ error: "Falta el campo company" });
  }
};

module.exports = {
  getAllProviders,
  insertProvider,
  updateProvider,
  deleteProvider
};