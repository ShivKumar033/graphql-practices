# GraphQL Practice Project

## Overview
This is a GraphQL practice project built with Apollo Server that demonstrates how to create a modern GraphQL API. The server provides functionality to manage users and their associated todo items, with comprehensive query and mutation operations.

## Project Description
This project implements a GraphQL backend server that handles:
- **User Management**: Store and retrieve user information including profile details, contact information, address, and company details
- **Todo Management**: Create, retrieve, and manage todo items associated with users
- **Relationships**: Handle complex relationships between users and todos

## Features
- Query all users or retrieve specific users by ID
- Query all todos or retrieve specific todos by ID
- Create new todo items and assign them to users
- Full type definitions with nested objects (Address, Company, Geo)
- RESTful-like queries and mutations for CRUD operations

## Technologies
- **Apollo Server 5.5.0**: Modern GraphQL server framework
- **Express.js 5.2.1**: Web framework for routing
- **GraphQL 16.13.2**: Query language implementation
- **Node.js**: JavaScript runtime environment

## Project Structure
```
server/
├── index.js              # Main server entry point
├── package.json          # Project dependencies and scripts
├── todo.js               # Todo data/logic
├── user.js               # User data/logic
├── schema/
│   ├── typeDefs.js       # GraphQL type definitions and queries
│   └── resolver.js       # Query and mutation resolvers
└── README.md             # This file
```

## Getting Started

### Installation
```bash
npm install
```

### Running the Server
```bash
npm run dev
```

The server will start on `http://localhost:8000` and display a ready message with the GraphQL endpoint URL.

## GraphQL Schema

### Types
- **User**: Contains user profile, contact, address, and company information
- **Todo**: Represents a task with title, completion status, and associated user
- **Address**: Contains street, city, zip code, and geographic coordinates
- **Company**: Contains company name, catchphrase, and business statement
- **Geo**: Geographic coordinates (latitude and longitude)

### Queries
- `getTodos`: Retrieve all todos
- `Todo(id)`: Get a specific todo by ID
- `getAllTodosById(id)`: Get all todos for a specific user
- `getAllUsers`: Retrieve all users
- `getUser(id)`: Get a specific user by ID

### Mutations
- `addTodo(title, completed, userId)`: Create a new todo for a specific user" 
