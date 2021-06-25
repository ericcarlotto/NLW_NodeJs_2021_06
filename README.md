# NLW_NodeJs_2021_06

Projeto desenvolvido para portifólio na NLW da RocketSeat com início no dia 20/06/2021.

TypeScript é um superset do JavaScript.
Possibilita a tipagem em JavaScript
É mais recomendado para desenvolvimento Backend

No projeto o Banco de Dados escolhido é o SQLite
Por ser mais leve e simple
Escolher o Banco de Dados conforme necessidade do projeto

O ORM utilizado é o TypeORM
Existem variádos tipo de ORM

O Beekeeper é utilizado no projeto para visualização do Banco de Dados

Anotação no código da aula 2:
/\*\_

- GET => Buscar uma informação
- POST => Inserir (Criar) uma informação
- PUT => Alterar uma informação
- DELETE => Remover um dado
- PATCH => Alterar uma informação específica
  \*\_/

*     TIPOS DE PARÂMETROS

* - ROUTES PARAMS => http://localhost:3000/produtos/94954083853 <== 94954083853 = id
* - QUERY PARAMS => http://localhost:3000/produtos?name=teclado&description=tecladobom& <== para filtrar algum produto , o & é para adicionar condições
*
* - BODY PARAMS => { ==> Utilizados para PUT, POST E PATCH. Não utilizado para GET
*     "name": "teclado",
*     "description": "teclado bom"
* }
  \*/

  //Request => Entrando

//Response => Saindo

Services like Use cases

[ ] Cadastro de usuário
=> Não é permitido cadastrar mais de um usuário com o mesmo e-mail
=> Não é permitido cadastrar usuário sem e-mail

[ ] Cadastro de tag
=> Não é permitido cadastrar tag sem nome
=> Não é permitido cadastrar mais de uma tag com o mesmo nome
=> Não é permitido o cadastro por usuários que não sejam administradores

[ ] Cadastro de elogios
=> Não é permitido um usuário cadastrar um elogio para si
=> Não é permitido cadastrar elogios inválidos
=> O usuário precisa estar autenticado na aplicação

Controller -> Service (throw new Error)
