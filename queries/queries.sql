-- Crear tabla authors
CREATE TABLE authors (
  id_author serial NOT NULL PRIMARY KEY, 
  name varchar(45) NOT NULL, 
  surname varchar(45) NOT NULL, 
  email varchar(100) NOT NULL UNIQUE,
  image varchar(255)
);

-- Crear tabla entries
CREATE TABLE entries (
  id_entry serial NOT NULL PRIMARY KEY, 
  title varchar(100) NOT NULL, 
  content text NOT NULL, 
  date date DEFAULT CURRENT_DATE,
  id_author int,
  category varchar(15),
  FOREIGN KEY (id_author) REFERENCES authors(id_author)
);

-- Insertar datos en tabla authors
INSERT INTO authors(name,surname,email,image)
VALUES
('Alejandru','Regex','alejandru@thebridgeschool.es','https://randomuser.me/api/portraits/thumb/men/75.jpg'),
('Birja','Rivera','birja@thebridgeschool.es','https://randomuser.me/api/portraits/thumb/men/60.jpg'),
('Alvaru','Riveru','alvaru@thebridgeschool.es','https://randomuser.me/api/portraits/thumb/men/45.jpg'),
('Muchelle','Wuallus','muchelle@thebridgeschool.es','https://randomuser.me/api/portraits/thumb/women/72.jpg'),
('Albertu','Henriques','albertu@thebridgeschool.es','https://randomuser.me/api/portraits/thumb/men/33.jpg'),
('Guillermu','Develaweyer','guillermu@thebridgeschool.es','https://randomuser.me/api/portraits/thumb/men/34.jpg'),
('Jabier','Hespinoza','jabier@thebridgeschool.es','https://randomuser.me/api/portraits/thumb/men/35.jpg');



-- Insertar datos en tabla entries
INSERT INTO entries(title,content,id_author,category)
VALUES 
('Noticia: SOL en Madrid','Contenido noticia 1',(SELECT id_author FROM authors WHERE email='alejandru@thebridgeschool.es'),'Tiempo'),
('Noticia: Un panda suelto por la ciudad','El panda se comió todas las frutas de una tienda',(SELECT id_author FROM authors WHERE email='birja@thebridgeschool.es'),'Sucesos'),
('El rayo gana la champions','Victoria por goleada en la final de la champions',(SELECT id_author FROM authors WHERE email='albertu@thebridgeschool.es'),'Deportes'),
('Amanece Madrid lleno de arena','La calima satura Madrid de arena. Pérdidas millonarias',(SELECT id_author FROM authors WHERE email='birja@thebridgeschool.es'),'Sucesos'),
('Descubren el motor de agua','Fin de la gasolina. A partir de ahora usaremos agua en nuestros coches',(SELECT id_author FROM authors WHERE email='alvaru@thebridgeschool.es'),'Ciencia');

-- Buscar entries por email usuario
SELECT * FROM entries WHERE id_author=(SELECT id_author FROM authors WHERE email='alejandru@thebridgeschool.es');


-- Buscar datos por email de usuario y cruzar datos
SELECT e.title,e.content,e.date,e.category,a.name,a.surname,a.image
FROM entries AS e
INNER JOIN authors AS a
ON e.id_author=a.id_author
WHERE a.email='alejandru@thebridgeschool.es'
ORDER BY e.title;


-- Buscar datos por email de 2 usuarios y cruzar datos
SELECT entries.title,entries.content,entries.date,entries.category,authors.name,authors.surname,authors.image
FROM entries
INNER JOIN authors
ON entries.id_author=authors.id_author
WHERE authors.email='alejandru@thebridgeschool.es' OR authors.email='alvaru@thebridgeschool.es' OR authors.email='albertu@thebridgeschool.es'
ORDER BY entries.title;

-- Actualizar datos de una entrada
UPDATE entries
	SET content='Back is back', date='2024-06-17', id_author=(SELECT id_author FROM authors WHERE email='alvaru@thebridgeschool.es'), category='Software'
	WHERE title='Estamos de Lunes de Back';


//Modificar al db para que no se puedan insertar entries repetidas por titulo
ALTER TABLE entries
ADD UNIQUE (title)

CREATE TABLE products (
  id_product SERIAL PRIMARY KEY,
  title VARCHAR(100) NOT NULL,
  company VARCHAR(100),
  description TEXT,
  category VARCHAR(50),
  price DECIMAL(10, 2),
  id_provider INTEGER REFERENCES providers(id_provider),
  image_url VARCHAR(255)
);

CREATE TABLE providers (
  id_provider SERIAL PRIMARY KEY,
  company VARCHAR(100) NOT NULL,
  CIF VARCHAR(20) UNIQUE NOT NULL,
  adress VARCHAR(150)
);


INSERT INTO products (name, surname, email, image, price, image_url)
VALUES
(
  'Apple',
  'Generic',
  'Fresh and crisp apples, perfect for snacking or incorporating into various recipes.',
  'groceries',
  1.99,
  'https://cdn.dummyjson.com/product-images/groceries/apple/1.webp'
),
(
  'Beef Steak',
  'Generic',
  'High-quality beef steak, great for grilling or cooking to your preferred level of doneness.',
  'groceries',
  12.99,
  'https://cdn.dummyjson.com/product-images/groceries/beef-steak/1.webp'
),
(
  'Cat Food',
  'Generic',
  'Nutritious cat food formulated to meet the dietary needs of your feline friend.',
  'groceries',
  8.99,
  'https://cdn.dummyjson.com/product-images/groceries/cat-food/1.webp'
),
(
  'Chicken Meat',
  'Generic',
  'Fresh and tender chicken meat, suitable for various culinary preparations.',
  'groceries',
  9.99,
  'https://cdn.dummyjson.com/product-images/groceries/chicken-meat/1.webp'
),
(
  'Cooking Oil',
  'Generic',
  'Versatile cooking oil suitable for frying, sautéing, and various culinary applications.',
  'groceries',
  4.99,
  'https://cdn.dummyjson.com/product-images/groceries/cooking-oil/1.webp'
),
(
  'Cucumber',
  'Generic',
  'Crisp and hydrating cucumbers, ideal for salads, snacks, or as a refreshing side.',
  'groceries',
  1.49,
  'https://cdn.dummyjson.com/product-images/groceries/cucumber/1.webp'
),
(
  'Dog Food',
  'Generic',
  'Specially formulated dog food designed to provide essential nutrients for your canine companion.',
  'groceries',
  10.99,
  'https://cdn.dummyjson.com/product-images/groceries/dog-food/1.webp'
),
(
  'Eggs',
  'Generic',
  'Fresh eggs, a versatile ingredient for baking, cooking, or breakfast.',
  'groceries',
  2.99,
  'https://cdn.dummyjson.com/product-images/groceries/eggs/1.webp'
),
(
  'Fish Steak',
  'Generic',
  'Quality fish steak, suitable for grilling, baking, or pan-searing.',
  'groceries',
  14.99,
  'https://cdn.dummyjson.com/product-images/groceries/fish-steak/1.webp'
),
(
  'Green Bell Pepper',
  'Generic',
  'Fresh and vibrant green bell pepper, perfect for adding color and flavor to your dishes.',
  'groceries',
  1.29,
  'https://cdn.dummyjson.com/product-images/groceries/green-bell-pepper/1.webp'
),
(
  'Green Chili Pepper',
  'Generic',
  'Spicy green chili pepper, ideal for adding heat to your favorite recipes.',
  'groceries',
  0.99,
  'https://cdn.dummyjson.com/product-images/groceries/green-chili-pepper/1.webp'
),
(
  'Honey Jar',
  'Generic',
  'Pure and natural honey in a convenient jar, perfect for sweetening beverages or drizzling over food.',
  'groceries',
  6.99,
  'https://cdn.dummyjson.com/product-images/groceries/honey-jar/1.webp'
),
(
  'Ice Cream',
  'Generic',
  'Creamy and delicious ice cream, available in various flavors for a delightful treat.',
  'groceries',
  5.49,
  'https://cdn.dummyjson.com/product-images/groceries/ice-cream/1.webp'
),
(
  'Juice',
  'Generic',
  'Refreshing fruit juice, packed with vitamins and great for staying hydrated.',
  'groceries',
  3.99,
  'https://cdn.dummyjson.com/product-images/groceries/juice/1.webp'
),
(
  'Kiwi',
  'Generic',
  'Nutrient-rich kiwi, perfect for snacking or adding a tropical twist to your dishes.',
  'groceries',
  2.49,
  'https://cdn.dummyjson.com/product-images/groceries/kiwi/1.webp'
);

-- Buscar productos por categoría
SELECT * FROM products WHERE category = 'groceries';

SELECT 
  p.title, 
  p.description, 
  p.price, 
  p.category, 
  pr.name AS provider_name, 
  pr.email AS provider_email
FROM products AS p
INNER JOIN providers AS pr
ON p.id_provider = pr.id_provider
WHERE p.category = 'groceries'
ORDER BY p.title;

SELECT 
  p.title, 
  p.description, 
  p.price, 
  p.category, 
  pr.name AS provider_name, 
  pr.address AS provider_address
FROM products AS p
INNER JOIN providers AS pr
ON p.id_provider = pr.id_provider
WHERE p.category = 'groceries'
ORDER BY p.price ASC;

UPDATE products
SET title = $1, company = $2, description = $3, category = $4, price = $5, image_url = $6
WHERE title = $7;



