import { TODOS } from '../todo.js';
import { USERS } from '../user.js';

const resolvers = {
    // Resolving nested user in a Todo
    Todo: {
        user: (todo) => USERS.find((user) => String(user.id) === String(todo.userId)),
    },

    User: {
        todo: (user) => TODOS.find((td) => String(td.id) === String(td.id))
    },

    // Query resolvers
    Query: {
        getTodos: () => TODOS,
        getAllUsers: () => USERS,
        getUser: (parent, { id }) => USERS.find((user) => String(user.id) === String(id)),
        getAllTodosById: (parent, { id }) => TODOS.find((td) => String(td.id) === String(id)),
    },

    // Mutation resolver
    Mutation: {
        addTodo: (parent, { title, completed = false, userId }) => {
            const newTodo = {
                id: String(TODOS.length + 1),
                title,
                completed,
                userId: String(userId)
            };
            TODOS.push(newTodo);
            return newTodo;
        }
    }
};

export default resolvers;