const getAllAuthors = `
SELECT * FROM authors
`;

const getEmail = `
SELECT * FROM authors WHERE email = $1
`;

const insertAuthor = `
INSERT INTO authors (name, surname, email, image)
VALUES ($1, $2, $3, $4)
`;

const updateAuthor = `
UPDATE authors
SET name = $1, surname = $2, email = $3, image = $4
WHERE email = $5
`;

const deleteAuthor = `
DELETE FROM authors WHERE email = $1
`;

module.exports = {
  getAllAuthors,
  getEmail,
  insertAuthor,
  updateAuthor,
  deleteAuthor
};