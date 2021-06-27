import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken"

interface IPayload {
  sub: string;
}

export function ensureAuthenticated(request: Request, response: Response, next: NextFunction) {
  //Receber o token 
  const authToken = request.headers.authorization;

  //Validar se o token está preenchido
  if(!authToken) {
    return response.status(401).end();
  }

  const [, token] = authToken.split(" ");

  try {
    //Validar o token
    const { sub } = verify( token, "3eba207f65bba2ab74d7b7134d10b98c") as IPayload;
    
    //Recuperar informações do usuário
    request.user_id = sub;

    return next();
  } catch (err) {
    return response.status(401).end();
  }
}