const express = require("express");
const router = express.Router();
const authController = require("../controllers/auth");
const dashboardController = require("../controllers/dashboard");
const { ensureAuth, ensureGuest } = require("../middleware/auth");

router.get('/', authController.getLogin);
router.get("/dashboard", ensureAuth, dashboardController.getDashboard);

module.exports = router;