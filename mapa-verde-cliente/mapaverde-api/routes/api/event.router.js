const express = require("express");
const router = express.Router();

const ROLES = require("../../Data/roles.constants.json");

const events =require('../../Data/event.example.json');
const eventController = require('../../controllers/event.controller');

const eventValidators = require("../../validators/event.validators");
const runValidations = require("../../validators/index.middleware");

const { authentication, authorization } = require('../../middlewares/auth.middleware');

router.get("/", eventController.findAll);
router.get("/own", authentication, eventController.findOwn);
router.get("/user/:identifier",
    eventValidators.findPostByIdValidator,
    runValidations,
    eventController.findPostsByUser);

router.get("/", eventController.findAll);
router.get("/:identifier",
    eventValidators.findPostByIdValidator,
    runValidations,
    eventController.findOneById);

router.post("/",
    authentication,
    authorization(ROLES.USER),
    eventValidators.createPostValidator,
    runValidations,
    eventController.create);

    router.patch("/visibility/:identifier",
    authentication,
    authorization(ROLES.USER),
    eventValidators.findPostByIdValidator,
    runValidations,
    eventController.togglePostVisibility
);
module.exports = router;