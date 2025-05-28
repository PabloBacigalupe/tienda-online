const getAllProducts = `
SELECT * FROM products
`;

const getCompany = `
SELECT * FROM products WHERE company = $1
`;

const insertProduct = `
INSERT INTO products (title, company, description, category, price, image_url)
VALUES ($1, $2, $3, $4, $5, $6)
`;

const updateProduct = `
UPDATE products
SET title = $1, company = $2, description = $3, category = $4, price = $5, image_url = $6
WHERE company = $7
`;

const deleteProduct = `
DELETE FROM products WHERE company = $1
`;

module.exports = {
  getAllProducts,
  getCompany,
  insertProduct,
  updateProduct,
  deleteProduct
};