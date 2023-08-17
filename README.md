controllers/: Contém os controladores que lidam com as requisições HTTP e chamam os casos de uso apropriados.

services/: Contém os serviços de negócios que implementam a lógica de negócios específica.

repositories/: Contém os repositórios que lidam com a persistência de dados e interagem com o banco de dados.

entities/: Define as entidades do domínio, como User, com seus modelos de dados.

routes/: Define as rotas HTTP e os controladores associados para cada recurso.
app.js: Ponto de entrada da aplicação onde você configura o servidor e as rotas.

middlewares: Middlewares são funções intermediárias que podem ser inseridas na cadeia de processamento de uma solicitação HTTP entre o momento em que a solicitação é recebida pelo servidor e o momento em que a resposta é enviada de volta ao cliente.
