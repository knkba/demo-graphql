const { ApolloServer } = require('@apollo/server');
const { ApolloGateway } = require('@apollo/gateway');
const express = require('express');
const { expressMiddleware } = require('@apollo/server/express4');
const cors = require('cors');
const bodyParser = require('body-parser');
const { IntrospectAndCompose } = require('@apollo/gateway');

const gateway = new ApolloGateway({
  supergraphSdl: new IntrospectAndCompose({
    subgraphs: [
      { name: 'users', url: 'http://localhost:4001/graphql' },
      { name: 'products', url: 'http://localhost:4002/graphql' }
    ]
  })
});

const server = new ApolloServer({ gateway });

const app = express();
app.use(cors());
app.use(bodyParser.json());

async function startServer() {
  await server.start();
  app.use('/graphql', expressMiddleware(server));
  app.listen(4000, () => {
    console.log('Gateway corriendo en http://localhost:4000/graphql');
  });
}

startServer(); 