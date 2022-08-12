
# Projeto Blogs API

Foi desenvolvido uma API e um banco de dados para a produção de conteúdo para um blog fazendo um CRUD, utilizando endpoints que estarão conectados ao  banco de dados seguindo os princípios do REST.


# Stacks utilizadas

Back-end: JavaScript, Node.js, Sequelize, Rest.

## Autores

- [Douglas Rodrigues](https://www.github.com/Douglas-S-Rodrigues)

## Documentação da API

#### Para fazer login

```
  POST /api/login
```


#### Criar um usuário

```
  POST /api/user
```

#### Buscar todos os usuários

```
  GET /api/user
```

#### Buscar um usuário

```
  GET /api/user/:id
```

#### Buscar todos as categorias

```
  GET /api/categories
```

#### Criar uma categoria

```
  POST /api/categories
```
#### Buscar todos os posts

```
  GET /api/post
```





| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id`      | `string` | **Obrigatório**. O ID do item que você quer |



