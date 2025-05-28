
const pool = require('../config/db_pgsql');
const queries = require('../queries/products.queries');

const getAllProducts = async () => {
  let client, result;
  try {
    client = await pool.connect();
    const data = await client.query(queries.getAllProducts);
    result = data.rows;
  } catch (err) {
    console.log(err);
    throw err;
  } finally {
    client.release();
  }
  return result;
};

const getProductByTitle = async (entry) => {
  const { title } = entry;
  let client, result;
  try {
    client = await pool.connect();
    const data = await client.query(queries.getProductByTitle, [title]);
    result = data.rows;
  } catch (err) {
    console.log(err);
    throw err;
  } finally {
    client.release();
  }
  return result;
};

const deleteProduct = async (id) => {
  const client = await pool.connect();
  try {
    const query = 'DELETE FROM products WHERE id_product = $1';
    const result = await client.query(query, [id]);
    return result.rowCount; // 1 si se borra, 0 si no
  } finally {
    client.release();
  }
};

const updateProduct = async (entry) => {
  const { title, company, description, category, price, image_url } = entry;
  let client, result;
  try {
    client = await pool.connect();
    const data = await client.query(queries.updateProduct, [
      title,
      company,
      description,
      category,
      price,
      image_url
      
    ]);
    
    result = data.rows;
  } catch (err) {
    console.log(err);
    throw err;
  } finally {
    client.release();
  }
  return result;
};

const insertProduct = async (entry) => {
  const { title, company, description, category, price, image_url } = entry;
  let client, result;
  try {
    client = await pool.connect();
    const data = await client.query(queries.insertProduct, [
      title,
      company,
      description,
      category,
      price,
      image_url
    ]);
    result = data.rowCount;
  } catch (err) {
    console.log(err);
    throw err;
  } finally {
    client.release();
  }
  return result;
};

const products = {
  getAllProducts,
  getProductByTitle,
  deleteProduct,
  updateProduct,
  insertProduct
};

module.exports = products;
