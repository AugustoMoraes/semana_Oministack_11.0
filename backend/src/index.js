const express =  require('express');
const routes = require('./routes');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);


/**
 * MÉTODOS HTTP
 * 
 * get: Buscar uma informaçao no back-end
 * post: Criar uma informaçao no back-end
 * put: Alterar uma informaçao no back-end
 * delet: Deletar uma informaçao no back-end
 */


app.listen(3333);