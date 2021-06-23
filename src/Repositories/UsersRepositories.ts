import { EntityRepository, Repository } from "typeorm";
import { User } from "../Model/entities/User";

@EntityRepository(User)
class UsersRepositories extends Repository<User> {}

export { UsersRepositories }