const express = require("express");
const router = express.Router();
const listsController = require("../controllers/lists");
const { ensureAuth, ensureGuest } = require("../middleware/auth");

router.get("/todo", ensureAuth, listsController.getTodo);
router.post("/createTodo", ensureAuth, listsController.createTodo);

module.exports = router;