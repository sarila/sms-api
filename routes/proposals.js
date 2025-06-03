const express = require("express");
const router = express.Router();
const control = require("../controllers/proposalController");
const auth = require("../middleware/auth");

router.use(auth);
router.get("/", control.list);
router.post("/", control.create);
router.put("/:id", control.update);
router.delete("/:id", control.remove);

module.exports = router;
