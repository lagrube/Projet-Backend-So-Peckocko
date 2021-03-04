const passwordValidator = require("password-validator");

// Schéma de mot de passe plus sécure
const passwordSchema = new passwordValidator();

// Contraintes du mot de passe
passwordSchema
  .is()
  .min(6) // Longueur minimun : 6
  .has()
  .uppercase() // Doit avoir au moins une majuscule
  .has()
  .lowercase() // Doit avoir au moins une minuscule
  .has()
  .digits() // Doit avoir au moins un chiffre
  .has()
  .not()
  .spaces(); // Ne doit pas avoir d'espaces

module.exports = passwordSchema;
