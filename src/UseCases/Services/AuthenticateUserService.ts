import { getCustomRepository } from "typeorm"
import { UsersRepositories } from "../../Repositories/UsersRepositories"
import { compare } from "bcryptjs"
import { sign } from "jsonwebtoken"

interface IAuhenticateRequest {
  email: string;
  password: string;
}

class AuthenticateUserService {
  async execute({email, password}: IAuhenticateRequest) {
    const usersRepositories = getCustomRepository(UsersRepositories);
    //Verificar se o email existe
    const user = await usersRepositories.findOne({
      email
    })
    if(!user) {
      throw new Error("Email/Password incorrect")
    }
    //Verificar se a senha está correta
    const passwordMatch = await compare(password, user.password)

    if(!passwordMatch) {
      throw new Error ("Email/Password incorrect")
    }    
    //Gerar token
    const token = sign({
      email: user.email
    }, "3eba207f65bba2ab74d7b7134d10b98c", {
      subject: user.id,
      expiresIn: "1d"
    })
    return token;
  }
}

export { AuthenticateUserService }