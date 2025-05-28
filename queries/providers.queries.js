const getAllEntries = `
SELECT p.company, p.cif, p.adress, p.category,
       pr.title, pr.description, pr.image_url
FROM providers p
INNER JOIN products pr ON p.product_company = pr.company
ORDER BY p.company
`;

const insertEntry = `
INSERT INTO providers (company, cif, adress, category, product_company)
VALUES ($1, $2, $3, $4, (SELECT company FROM products WHERE company = $5))
`;

const updateEntry = `
UPDATE providers
SET company = $1, cif = $2, adress = $3, category = $4,
    product_company = (SELECT company FROM products WHERE company = $5)
WHERE company = $6
`;

const deleteEntry = `
DELETE FROM providers WHERE company = $1
`;

module.exports = {
  getAllEntries,
  insertEntry,
  updateEntry,
  deleteEntry
};