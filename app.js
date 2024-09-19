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
  const users = await db.Utilisateurs.findAll();
  res.json(users);
});

app.post("/utilisateurs", async (req, res) => {
  try {
    // Récupérer les données envoyées dans le body de la requête
    const { nom, email } = req.body;

    // Créer un nouvel utilisateur avec Sequelize
    const nouvelUtilisateur = await Utilisateurs.create({ nom, email });

    // Retourner une réponse avec les détails de l'utilisateur créé
    res.status(201).json(nouvelUtilisateur);
  } catch (err) {
    // Gérer les erreurs et retourner un statut 500 si quelque chose ne va pas
    res.status(500).json({
      error: "Erreur lors de la création de l'utilisateur",
      message: err.message,
    });
  }
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
