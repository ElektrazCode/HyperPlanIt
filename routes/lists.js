const express = require("express");
const router = express.Router();
const listsController = require("../controllers/lists");
// const dashboardController = require("../controllers/dashboard");
// const { ensureAuth, ensureGuest } = require("../middleware/auth");

router.get("/lists", listsController.getList);
router.post("/lists", listsController.createList);

module.exports = router;