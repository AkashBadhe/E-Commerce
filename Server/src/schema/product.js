import { gql } from 'apollo-server-express';

export default gql`
  extend type Query {
    products(cursor: String, limit: Int): ProductConnection!
    product(id: ID!): Product!
  }

  extend type Mutation {
    createProduct(title: String!, price: String!): Product!
    deleteProduct(id: ID!): Boolean!
  }

  type ProductConnection {
    edges: [Product!]!
    pageInfo: PageInfo!
  }

  type Product {
    id: ID!
    title: String!
    price: String!
    createdAt: Date!
    user: User!
  }

  extend type Subscription {
    productCreated: ProductCreated!
  }

  type ProductCreated {
    product: Product!
  }
`;
