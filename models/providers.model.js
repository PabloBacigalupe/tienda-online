
const pool = require('../config/db_pgsql'); 
const queries = require('../queries/providers.queries'); 

const getAllProviders = async () => {
  let client, result;
  try {
    client = await pool.connect();
    const data = await client.query(queries.getAllProviders);
    result = data.rows;
  } catch (err) {
    console.log(err);
    throw err;
  } finally {
    client.release();
  }
  return result;
};

const insertProvider = async (entry) => {
  let client, result;
  try {
    client = await pool.connect();
    const data = await client.query(queries.insertProvider, [
      entry.company,
      entry.cif,
      entry.adress
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

const updateProvider = async (entry) => {
  let client, result;
  try {
    client = await pool.connect();
    const data = await client.query(queries.updateProvider, [
      entry.company,
      entry.cif,
      entry.adress,
      entry.old_company
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

const deleteProvider = async (entry) => {
  let client, result;
  try {
    client = await pool.connect();
    const data = await client.query(queries.deleteProvider, [entry.company]);
    result = data.rowCount;
  } catch (err) {
    console.log(err);
    throw err;
  } finally {
    client.release();
  }
  return result;
};

const providers = {
  getAllProviders,
  insertProvider,
  updateProvider,
  deleteProvider
};

module.exports = providers;