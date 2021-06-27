import { Router } from "express";
import { CreateUserController } from "./Controllers/CreateUserController";
import { CreateTagController } from "./Controllers/CreateTagController";
import { ensureAdmin } from "./Middlewares/ensureAdmin";
import { AuthenticateUserController } from "./Controllers/AuthenticateUserController";
import { CreateComplimentController } from "./Controllers/CreateComplimentController";

const router = Router();

const createUserController = new CreateUserController();
const createTagController = new CreateTagController();
const authenticateUserController = new AuthenticateUserController();
const createComplimentController = new CreateComplimentController();

router.post("/users", createUserController.handle);
router.post("/tags", ensureAdmin ,createTagController.handle);
router.post("/login", authenticateUserController.handle);
router.post("/compliments", createComplimentController.handle);

export { router };