const List = require("../models/List");
const Task = require("../models/Task");

module.exports = {
    getTodo: async (req, res) => {
        try {
            const lists = await List.find({ user: req.user.id }).sort({ createdAt: "desc"}).lean();
            const tasks = await Task.find().sort({ createdAt: "asc"}).lean();
            res.render("todo.ejs", { lists: lists, user: req.user, tasks: tasks });
        } catch (err) {
            console.log(err);
        }
    },
    createTodo: async (req, res) => {
        try {
            const list = await List.create({
                title: req.body.listName,
                category: "ToDo",
                user: req.user.id,
            });
            console.log(req.body);
            const total = req.body.taskName.length;
            console.log(total);
            for (let i=0; i<total; i++){
                await Task.create({
                    title: req.body.taskName[i],
                    list: list._id,
                    user: req.user.id,
                    due: req.body.dueDate[i],
                    recurrent: req.body.frequency[i] ? true : false,
                    frequency: req.body.frequency[i]
                });
            }
            res.redirect("/lists/todo");
        } catch (err) {
        console.log(err);
        }
    },
    deleteList: async (req, res) => {
        console.log(req.body);
    }
};