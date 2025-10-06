const express = require("express");
const router = express.Router();


const controller = require("../controllers/contacto.controller");

router.get("/:create", controller.create);
router.post("/", controller.store);

router.get("/", controller.index);
router.post("/", controller.submit);
router.get("/:id", controller.show);

router.get("/:id/edit", controller.edit);
router.put("/:id");

router.delete("/id", controller.destroy)

module.exports = router;