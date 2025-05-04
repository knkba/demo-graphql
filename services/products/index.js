const { ApolloServer } = require('@apollo/server');
const { buildSubgraphSchema } = require('@apollo/subgraph');
const { gql } = require('graphql-tag');
const express = require('express');
const { expressMiddleware } = require('@apollo/server/express4');
const cors = require('cors');
const bodyParser = require('body-parser');

const typeDefs = gql`
  extend schema @link(url: "https://specs.apollo.dev/federation/v2.0", import: ["@key", "@shareable", "@requires", "@external"])

  type Product @key(fields: "id") {
    id: ID!
    name: String!
    price: Float!
    userId: ID!
    user: User
  }

  extend type User @key(fields: "id") {
    id: ID! @external
    products: [Product]
  }

  type Query {
    products: [Product]
    product(id: ID!): Product
  }
`;

const products = [
  { id: '1', name: 'Laptop', price: 999.99, userId: '1' },
  { id: '2', name: 'Smartphone', price: 499.99, userId: '1' },
  { id: '3', name: 'Tablet', price: 299.99, userId: '2' }
];

const resolvers = {
  Query: {
    products: () => products,
    product: (_, { id }) => products.find(product => product.id === id)
  },
  Product: {
    __resolveReference(product) {
      return products.find(p => p.id === product.id);
    },
    user: (product) => ({ id: product.userId })
  },
  User: {
    products: (user) => products.filter(product => product.userId === user.id)
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
  app.listen(4002, () => {
    console.log('Servicio de productos corriendo en http://localhost:4002/graphql');
  });
}

startServer(); 