const express = require("express");
const app = express();
const config = require("./config/config.json");

const { Sequelize } = require("sequelize");
const { DataTypes } = require("sequelize"); // Import the built-in data types

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
app.listen(3000, () => {
  console.log("Serveur démarré sur le port 3000");
});
