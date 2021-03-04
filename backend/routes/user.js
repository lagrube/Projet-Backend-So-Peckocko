// On crée un router avec la méthode mise à disposition par Express
const router = require("express").Router();
// On associe les fonctions aux différentes routes, on importe le controller
const userCtrl = require("../controllers/users");
const verifyPassword = require("../middleware/password");

router.post("/auth/signup", verifyPassword, userCtrl.signUp); // Crée un nouvel utilisateur
router.post("/auth/login", userCtrl.logIn); // Connecte un utilisateur

// On exporte nos routes User
module.exports = router;
