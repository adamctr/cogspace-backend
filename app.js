const express = require("express");
const app = express();
const config = require("./config/config.json");

const { Sequelize, DataTypes } = require("sequelize");
const db = require("./models");

const sequelize = new Sequelize(
  config.development.database,
  config.development.username,
  config.development.password,
  {
    host: config.development.host,
    port: config.development.port,
    dialect: config.development.dialect,
  }
);

// Middleware
app.use(express.json());

// Routes
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/users", async (req, res) => {
  const users = await db.User.findAll();
  res.json(users);
});

app.post("/users", async (req, res) => {
  const user = await db.User.create(req.body);
  res.json(user);
});

app.get("/users/:id", async (req, res) => {
  const user = await db.User.findByPk(req.params.id);
  res.json(user);
});

app.put("/users/:id", async (req, res) => {
  const user = await db.User.findByPk(req.params.id);
  user.update(req.body);
  res.json(user);
});


// Tester la connexion
sequelize
  .authenticate()
  .then(() => {
    console.log("Connexion réussie à la base de données.");
  })
  .catch((err) => {
    console.error("Impossible de se connecter :", err);
  });

// Démarrer le serveur
db.sequelize.sync({ alter: true }).then(() => {
  app.listen(3000, () => {
    console.log("Serveur démarré sur le port 3000");
  });
});
