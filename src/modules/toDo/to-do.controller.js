const todoService = require('./to-do.service');

class TodoController {
  async createTodo(req, res) {
    try {
      const todo = await todoService.createTodo(req.body);
      res.status(201).json(todo);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  }

  async getTodo(req, res) {
    try {
      const limit = req?.query?.limit;
      const todos = await todoService.getTodo({limit});
      res.json(todos);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }
  async updateTodo(req, res) {
    try {
      console.log(req);
      const todo = await todoService.updateTodo(req.params.id, req.body);
      res.json(todo);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }
}

module.exports = new TodoController();
