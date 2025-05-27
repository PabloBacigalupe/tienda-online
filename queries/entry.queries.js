const db_queries_entries = {
    getAllEntries: `
      SELECT e.title, e.content, e.date, e.category,
             a.name, a.surname, a.image
      FROM entries e
      JOIN authors a ON e.email_author = a.email
    `,
  
    updateEntryByTitle: `
      UPDATE entries
      SET title = $1, content = $2, date = $3, category = $4, email_author = $5
      WHERE title = $6
    `,
  
    deleteEntryByTitle: `
      DELETE FROM entries WHERE title = $1
    `,
  
    createTable: `
      CREATE TABLE IF NOT EXISTS entries (
        id_entry SERIAL PRIMARY KEY,
        title VARCHAR(255) UNIQUE NOT NULL,
        content TEXT,
        date TIMESTAMP,
        category VARCHAR(50),
        email_author VARCHAR(100),
        FOREIGN KEY (email_author) REFERENCES authors(email)
      )
    `,
  
    dropTable: `
      DROP TABLE IF EXISTS entries
    `
  };
  
  module.exports = db_queries_entries;