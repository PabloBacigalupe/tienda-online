const db_queries_providers = {
  getAllProviders: `
    SELECT p.company, p.cif, p.adress, p.category,
           pr.title, pr.description, pr.image_url
    FROM providers p
    JOIN products pr ON p.product_company = pr.company
  `,

  updateProviderByCompany: `
    UPDATE providers
    SET company = $1, cif = $2, adress = $3, category = $4, product_company = $5
    WHERE company = $6
  `,

  deleteProviderByCompany: `
    DELETE FROM providers WHERE company = $1
  `,

  createTable: `
    CREATE TABLE IF NOT EXISTS providers (
      id_provider SERIAL PRIMARY KEY,
      company VARCHAR(255) UNIQUE NOT NULL,
      cif VARCHAR(50),
      adress VARCHAR(255),
      category VARCHAR(50),
      product_company VARCHAR(255),
      FOREIGN KEY (product_company) REFERENCES products(company)
    )
  `,

  dropTable: `
    DROP TABLE IF EXISTS providers
  `
};

module.exports = db_queries_providers;