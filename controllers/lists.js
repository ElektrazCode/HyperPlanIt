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
            res.redirect("/lists/todo");
        }
    },
    createTodo: async (req, res) => {
        try {
            const list = await List.create({
                title: req.body.listName,
                category: "ToDo",
                user: req.user.id,
            });
            const total = req.body.taskName.length;
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
            res.redirect("/lists/todo");
        }
    },
    deleteList: async (req, res) => {
        try{
            await List.deleteOne({ _id: req.params.id });
            await Task.deleteMany({ list: req.params.id });
            res.redirect("/lists/todo");
        } catch(err){
            console.log(err);
            res.redirect("/lists/todo");
        }
    },
    addTask: async (req, res) => {
        console.log(req.body);
        try{
            await Task.create({
                title: req.body.taskName[0],
                list: req.params.listId,
                user: req.user.id[0],
                due: req.body.dueDate[0],
                recurrent: req.body.frequency[0] ? true : false,
                frequency: req.body.frequency[0]
            });
            res.redirect("/lists/todo");
        } catch (err){
            console.log(err);
            res.redirect("/lists/todo");
        }
    }
};