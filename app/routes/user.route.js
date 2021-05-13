module.exports = (app) => {
    const users = require('../controllers/user.controller.js');

    // Create a new user
    app.post('/users', users.createUser);

    // Retrieve all users
    app.get('/all-users', users.findAllUsers);

    // Retrieve a single user by id
    app.get('/users/:id', users.findOneUser);

    // Update a User with id
    app.put('/users/:id', users.updateUser);

    // Delete a User by id
    app.delete('/users/:id', users.deleteUser);
}