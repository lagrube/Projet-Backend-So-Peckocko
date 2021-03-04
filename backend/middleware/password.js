const passwordSchema = require("../models/password");

// vérifie que le mot de passe valide le schema décrit
module.exports = (req, res, next) => {
  if (!passwordSchema.validate(req.body.password)) {
    return res.status(400).json({ error: "Format de mot de passe incorrect" });
  } else {
    next();
  }
};
