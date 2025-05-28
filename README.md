# 🛒 Tienda Online

Proyecto Fullstack desarrollado como parte del Bootcamp de Desarrollo Web. Esta aplicación permite gestionar una tienda online donde se pueden añadir, listar, editar y eliminar productos. Está dividida en **backend (API REST)** y **frontend (interfaz de usuario en React)**.

---

## 🚀 Tecnologías Utilizadas

### 🔧 Backend
- **Node.js** + **Express** – Framework y servidor para crear la API REST.
- **PostgreSQL** – Base de datos relacional para almacenar los productos.
- **pg** – Cliente de PostgreSQL para Node.js.
- **dotenv** – Manejo seguro de variables de entorno.
- **Morgan** – Middleware de logs para las peticiones HTTP.

### 🎨 Frontend
- **React** – Biblioteca para construir la interfaz de usuario.
- **React Context + useReducer** – Para la gestión de estado global de los productos.
- **React Toastify** – Notificaciones visuales.
- **Fetch API** – Para consumir los endpoints del backend.
- **Vite** – Herramienta de desarrollo rápida para React.
- **CSS puro** – Para estilos personalizados, sin Tailwind.

---

## ⚙️ Funcionalidades del Backend

- Obtener todos los productos (`GET /api/products`)
- Añadir un producto nuevo (`POST /api/products`)
- Eliminar un producto (`DELETE /api/products/:id`)
- Actualizar un producto (`PUT /api/products`)
- Filtrado y ordenación desde frontend

---

## 💻 Funcionalidades del Frontend

- Visualizar lista de productos en tarjetas
- Buscar por texto (título, empresa, descripción)
- Añadir nuevo producto mediante formulario
- Editar producto desde un modal
- Eliminar producto directamente desde la card
- Actualización automática del estado tras operaciones
- Diseño responsive y limpio

---

## 🗂️ Estructura del Proyecto

```
/client (frontend con React)
  └── src/components/...
/server (backend con Express)
  ├── models/
  ├── routes/
  ├── controllers/
  ├── config/
  ├── index.js
  └── .env
```
