const Todo = require("./to-do.model");

class TodoService {
  async createTodo(data) {
    return await Todo.create(data);
  }

  async getTodo({ limit }) {
    return await Todo.findAndCountAll({ limit: limit });
  }
  async updateTodo( id, body) {
    return await Todo.update({...body }, { where: { id } });
  }
}

module.exports = new TodoService();
