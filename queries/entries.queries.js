const getAllEntries = `
SELECT e.title, e.content, e.date, e.category,
       a.name, a.surname, a.image
FROM entries e
INNER JOIN authors a ON e.id_author = a.id_author
ORDER BY e.title
`;

const insertEntry = `
INSERT INTO entries (title, content, date, category, id_author)
VALUES ($1, $2, $3, $4, (SELECT id_author FROM authors WHERE email = $5))
`;

const updateEntry = `
UPDATE entries
SET title = $1, content = $2, date = $3, category = $4,
    id_author = (SELECT id_author FROM authors WHERE email = $5)
WHERE title = $6
`;

const deleteEntry = `
DELETE FROM entries WHERE title = $1
`;

module.exports = {
  getAllEntries,
  insertEntry,
  updateEntry,
  deleteEntry
};