import { Router } from "express";
import { CreateUserController } from "./Controllers/CreateUserController";
import { CreateTagController } from "./Controllers/CreateTagController";
import { ensureAdmin } from "./Middlewares/ensureAdmin";
import { AuthenticateUserController } from "./Controllers/AuthenticateUserController";
import { CreateComplimentController } from "./Controllers/CreateComplimentController";
import { ensureAuthenticated } from "./Middlewares/ensureAuthenticated";
import { ListUserSendComplimentsController } from "./Controllers/ListUserSendComplimentsController";
import { ListUserReceiveComplimentsController } from "./Controllers/ListUserReceiveComplimentsController";
import { ListTagsController } from "./Controllers/ListTagsController";
import { ListUsersController } from "./Controllers/ListUsersController";

const router = Router();

const createUserController = new CreateUserController();
const createTagController = new CreateTagController();
const authenticateUserController = new AuthenticateUserController();
const createComplimentController = new CreateComplimentController();
const listUserSendComplimentController = new ListUserSendComplimentsController();
const listUserReceiveComplimentController = new ListUserReceiveComplimentsController();
const listTagsController = new ListTagsController();
const listUsersController = new ListUsersController();

router.post("/users", createUserController.handle);
// Post tags
router.post("/tags", ensureAuthenticated, ensureAdmin, createTagController.handle);
// Get tags
router.get("/tags", ensureAuthenticated, listTagsController.handle);
router.post("/login", authenticateUserController.handle);
router.post("/compliments", ensureAuthenticated, createComplimentController.handle);

router.get("/users/compliments/send", ensureAuthenticated, listUserSendComplimentController.handle);
router.get("/users/compliments/receive", ensureAuthenticated, listUserReceiveComplimentController.handle);

router.get("/users", ensureAuthenticated, listUsersController.handle);

export { router };