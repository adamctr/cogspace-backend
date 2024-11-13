const express = require("express");
const app = express();
const db = require("./models");
const PORT = process.env.PORT || 3000;
const { Sequelize, DataTypes, Op } = require("sequelize");
const config = require("./config/config.json");

// Initialisation de Sequelize
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
module.exports = { sequelize, DataTypes, Op };

// Middleware pour parser les données JSON
app.use(express.json());

// Requires des routes
const ficheRoutes = require("./routes/ficheRoutes");
const categorieRoutes = require("./routes/categorieRoutes");
const utilisateurRoutes = require("./routes/utilisateurRoutes");
const commentaireRoutes = require("./routes/commentaireRoutes");
const utilisateurFichesFavoritesRoutes = require("./routes/utilisateurFichesFavoritesRoutes");

// Routes
app.use("/post", ficheRoutes); // Routes pour les fiches
app.use("/category", categorieRoutes); // Routes pour les catégories
app.use("/user", utilisateurRoutes); // Routes pour les utilisateurs
app.use("/comment", commentaireRoutes); // Routes pour les commentaires
app.use("/userfavoriteposts", utilisateurFichesFavoritesRoutes); // Routes pour les commentaires

// Gérer les erreurs 404
app.use((req, res, next) => {
  res.status(404).json({ message: "Ressource non trouvée" });
});

db.sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch((err) => {
    console.error("Unable to connect to the database:", err);
  });

// Lancer le serveur
db.sequelize.sync().then((req) => {
  app.listen(PORT, () => {
    console.log(`Serveur lancé sur le port ${PORT}`);
  });
});
