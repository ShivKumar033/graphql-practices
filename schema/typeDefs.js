const typeDefs = `#graphql
  type Geo {
        lat: String
        lng: String
    }

    type Address {
        street: String
        suite: String
        city: String
        zipcode: String
        geo: Geo
    }

    type Company {
        name: String
        catchPhrase: String
        bs: String
    }

    type User {
        id: ID!
        name: String!
        username: String!
        email: String!
        phone: String!
        website: String!
        address: Address
        company: Company
        todo: Todo
    }

    type Todo {
        id: ID!
        title: String!
        completed: Boolean
        user: User
    }

    type Query {
        getTodos: [Todo]
        Todo(id: ID!): Todo
        getAllTodosById(id: ID!): Todo
        getAllUsers: [User]
        getUser(id: ID!): User
    }

    type Mutation {
        addTodo(title: String!, completed: Boolean, userId: ID!): Todo
    }
`;

export default typeDefs;

