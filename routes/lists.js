const express = require("express");
const router = express.Router();
const listsController = require("../controllers/lists");
const { ensureAuth, ensureGuest } = require("../middleware/auth");

router.get("/todo", ensureAuth, listsController.getTodo);
// router.post("/createList", ensureAuth, listsController.createTodo);
// router.post("/addTask/:list", ensureAuth, listsController.addTask);
// router.delete("/deleteList/:list", ensureAuth, listsController.deleteList);

module.exports = router;