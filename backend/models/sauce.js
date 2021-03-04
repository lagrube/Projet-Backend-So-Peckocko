// On importe mongoose
const mongoose = require("mongoose");
const sanitizerPlugin = require("mongoose-sanitizer-plugin");

// Création d'un schema mangoose pour que les données de la base MongoDB ne puissent pas différer de
//celui précisé dans le schema Model des sauces. L'id est généré automatiquement par MongoDB

const sauceSchema = mongoose.Schema({
  // UserId du createur
  userId: {
    type: String,
    required: true,
    maxlength: 40,
    minLength: 3,
  },
  // Nom de la sauce
  name: {
    type: String,
    required: true,
    maxlength: 40,
    minLength: 3,
  },
  // Créateur de la sauce
  manufacturer: {
    type: String,
    required: true,
    maxlength: 40,
    minLength: 3,
  },
  // Description de la sauce
  description: {
    type: String,
    required: true,
    maxlength: 40,
    minLength: 3,
  },
  // Ingredients qui pimentent la sauce
  mainPepper: {
    type: String,
    required: true,
    maxlength: 40,
    minLength: 3,
  },
  // Adresse de l'image de presentation de la sauce
  imageUrl: {
    type: String,
    required: true,
  },
  // Piquant de la sauce
  heat: {
    type: Number,
    required: true,
  },
  // Nombre de Like reçu
  likes: {
    type: Number,
  },
  // Nombre de dislike reçu
  dislikes: {
    type: Number,
  },
  // Utilisateurs qui Like la sauce
  usersLiked: {
    type: [String],
  },
  // Utilisateur qui DisLike la sauce
  usersDisliked: {
    type: [String],
  },
});

// Plugin pour Mongoose qui purifie les champs du model avant de les enregistrer dans la base MongoDB.
// Utilise le HTML Sanitizer de Google Caja pour effectuer la désinfection.
sauceSchema.plugin(sanitizerPlugin);

// On exporte ce shéma de données, on va donc pouvoir utiliser ce modèle pour intéragir avec l'application
module.exports = mongoose.model("Sauce", sauceSchema);
