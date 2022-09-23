const express = require("express");
const router = express.Router();
const authController = require("../controllers/auth");
const dashboardController = require("../controllers/dashboard");
const { ensureAuth, ensureGuest } = require("../middleware/auth");

router.get('/', authController.getLogin);
router.get("/login", authController.getLogin);
router.post("/login", authController.postLogin);
router.get("/logout", authController.logout);
router.get("/signup", authController.getSignup);
router.post("/signup", authController.postSignup);
router.get("/forgot-password", authController.getForgotPassword);
router.get("/dashboard", ensureAuth, dashboardController.getDashboard)

module.exports = router;