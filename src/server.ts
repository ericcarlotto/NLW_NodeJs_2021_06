import express, { response } from "express";

const app = express();

/**
 * GET => Buscar uma informação
 * POST => Inserir (Criar) uma informação
 * PUT => Alterar uma informação
 * DELETE => Remover um dado 
 * PATCH => Alterar uma informação específica
 */

app.get("/test", (request, response) => {
  //Request => Entrando
  //Response => Saindo

  return response.send("Olá Carlotto.");
})

app.post("/test-post", (request, response) => {
  return response.send("Olá Carlotto, este é o método post");
})

//http://localhost:3000
app.listen(3000, () => console.log("Server is running"))