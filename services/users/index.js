const { ApolloServer } = require('@apollo/server');
const { buildSubgraphSchema } = require('@apollo/subgraph');
const { gql } = require('graphql-tag');
const express = require('express');
const { expressMiddleware } = require('@apollo/server/express4');
const cors = require('cors');
const bodyParser = require('body-parser');

const typeDefs = gql`
  extend schema @link(url: "https://specs.apollo.dev/federation/v2.0", import: ["@key", "@shareable"])

  type User @key(fields: "id") {
    id: ID!
    name: String!
    email: String!
  }

  type Query {
    users: [User]
    user(id: ID!): User
  }
`;

const users = [
  { id: '1', name: 'Juan Pérez', email: 'juan@example.com' },
  { id: '2', name: 'María García', email: 'maria@example.com' }
];

const resolvers = {
  Query: {
    users: () => users,
    user: (_, { id }) => users.find(user => user.id === id)
  },
  User: {
    __resolveReference(user) {
      return users.find(u => u.id === user.id);
    }
  }
};

const server = new ApolloServer({
  schema: buildSubgraphSchema({ typeDefs, resolvers })
});

const app = express();
app.use(cors());
app.use(bodyParser.json());

async function startServer() {
  await server.start();
  app.use('/graphql', expressMiddleware(server));
  app.listen(4001, () => {
    console.log('Servicio de usuarios corriendo en http://localhost:4001/graphql');
  });
}

startServer(); 