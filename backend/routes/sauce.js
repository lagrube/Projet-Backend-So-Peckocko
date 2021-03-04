// On crée un router avec la méthode mise à disposition par Express
const router = require("express").Router();
// On associe les fonctions aux différentes routes, on importe le controller
const sauceCtrl = require("../controllers/sauces");

// Ajout des middleweares
// On importe le middleware auth pour sécuriser les routes
const auth = require("../middleware/auth"); // Récupère la configuration d'authentification JsonWebToken
//On importe le middleware multer pour la gestion des images
const multer = require("../middleware/multer");

router.get("/sauces", auth, sauceCtrl.getAllSauce); // On récupère toutes les sauces
router.get("/sauces/:id", auth, sauceCtrl.getOneSauce); // On récupère la sauce sélectionnée
router.post("/sauces", auth, multer, sauceCtrl.createSauce); // On créer une sauce
router.put("/sauces/:id", auth, multer, sauceCtrl.modifySauce); // On modifie une sauce
router.delete("/sauces/:id", auth, sauceCtrl.deleteSauce); // On supprime une sauce
router.post("/sauces/:id/like", auth, sauceCtrl.likeDislike); // On agit sur les likes

// On exporte nos routes Sauce
module.exports = router;
