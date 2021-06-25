import { EntityRepository, Repository } from "typeorm";
import { Tag } from "../Model/entities/Tag";

@EntityRepository(Tag)
class TagsRepositories extends Repository<Tag> {}

export { TagsRepositories };