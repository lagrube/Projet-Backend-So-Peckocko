// Dotenv Route
require("dotenv").config({ path: "./config/.env" });

// Express
const express = require("express");
const app = express();
// BodyParser
const bodyParser = require("body-parser");
// Route API
const sauceRoutes = require("./routes/sauce");
// Route User
const userRoutes = require("./routes/user");
// Route serveur pour l'image
const path = require("path");

// Sécurisation:
// Par Helmet
const helmet = require("helmet");
// Des cookies
const session = require("cookie-session");
// Supprime le cache
const nocache = require("nocache");

// Header
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  );
  next();
});

//Cela indique à Express qu'il faut gérer la ressource images de manière statique
app.use("/images", express.static(path.join(__dirname, "images")));

// Transforme les données arrivant de la requête POST en un objet JSON facilement exploitable
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

// Sécurisation par Helmet
app.use(helmet());
//Sécurisation en désactivant la mise en cache du navigateur
app.use(nocache());
// Sécurisation des cookies
const expiryDate = new Date(Date.now() + 3600000); // 1 heure (60 * 60 * 1000)
app.use(
  session({
    name: "session",
    secret: process.env.SEC_SES,
    cookie: {
      secure: true,
      httpOnly: true,
      domain: "http://localhost:3000",
      expires: expiryDate,
    },
  })
);

// Va servir les routes dédiées aux utilisateurs
app.use("/api", userRoutes);
// Va servir les routes dédiées aux sauces
app.use("/api", sauceRoutes);

module.exports = app;
