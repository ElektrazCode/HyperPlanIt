const List = require("../models/List");
const Task = require("../models/Task");

module.exports = {
    getTodo: async (req, res) => {
        try {
        const lists = await List.find({user:req.user.id}).sort({ createdAt: "desc"}).lean();
        const tasks = await Task.find( {listId: req.params.id} ).sort({ createdAt: "asc"}).lean();   
        res.render("todo.ejs", { lists: lists, user: req.user, tasks: tasks});
        } catch (err) {
        console.log(err);
        }
    },
    createTodo: async (req, res) => {
        try {
        await List.create({
            title: req.body.listName,
            category: req.body.listType,
            user: req.user.id,
        });
        console.log("List has been added!");
        res.redirect("/todo");
        } catch (err) {
        console.log(err);
        }
    }
};