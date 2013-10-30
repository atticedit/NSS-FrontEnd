var database = require('../modules/database');

/*
 * GET /tasks
 */

exports.index = function(req, res){
  var tasks = database.read(__dirname + '/../db/tasks.json');
  res.render('tasks/index', { title: 'Tasks | To Do App', tasks: tasks });
};

/*
 * GET /tasks/new
 */

exports.new = function(req, res){
  res.render('tasks/new', { title: 'New Task | To Do App' });
};

/*
 * POST /tasks
 */

exports.create = function(req, res){
  var item = req.body.item;
  var dueDate = req.body.dueDate;
  var color = req.body.color;

  var tasks = database.read(__dirname + '/../db/tasks.json');
  var task = {item: item, dueDate: dueDate, color: color};
  tasks.push(task);
  database.write(__dirname + '/../db/tasks.json', tasks);

  res.redirect('/tasks');
};