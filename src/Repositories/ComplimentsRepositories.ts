import { EntityRepository, Repository } from "typeorm";
import { Compliment } from "../Model/entities/Compliment";

@EntityRepository(Compliment)
class ComplimentsRepositories extends Repository<Compliment> {}

export { ComplimentsRepositories };