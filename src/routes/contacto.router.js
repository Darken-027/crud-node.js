const express = require('express');
const router = express.Router();

const controller = require('../controllers/contacto.controller');

router.get("/create", controller.create);
router.post('/', controller.store);

router.get('/', controller.index);
router.get("/:id", controller.show);

router.post("/:id/edit", controller.edit);
router.put("/:id");

module.exports = router;