const List = require("../models/List");
const Task = require("../models/Task");

module.exports = {
    getTodo: async (req, res) => {
        try {
            const lists = await List.find({ user: req.user.id }).sort({ createdAt: "desc"}).lean();
            const tasks = await Task.find().sort({createdAt: "asc"}).lean();
            res.render("todo.ejs", { lists: lists, user: req.user, tasks: tasks });
        } catch (err) {
            console.log(err);
            res.redirect("/lists/todo");
        }
    }
    // createList: async (req, res) => {
    //     try {
    //         const list = await List.create({
    //             title: req.body.listName,
    //             category: "ToDo",
    //             user: req.user.id,
    //         });
    //         const total = req.body.taskName.length;
    //         console.log(total);
    //         console.log(list._id);
    //         console.log(req.body);
    //         for (let i=0; i<total; i++){
    //             await Task.create({
    //                 list: list._id,
    //                 task: req.body.taskName[i],
    //                 due: req.body.dueDate[i],
    //                 recurrent: req.body.frequency[i] ? true : false,
    //                 frequency: req.body.frequency[i],
    //                 user: req.user.id
    //             });
    //         }
    //         res.redirect("/lists/todo");
    //     } catch (err) {
    //         console.log(err);
    //         res.redirect("/lists/todo");
    //     }
    // },
    // deleteList: async (req, res) => {
    //     try{
    //         await List.deleteOne({ _id: req.params.id });
    //         await Task.deleteMany({ list: req.params.list });
    //         res.redirect("/lists/todo");
    //     } catch(err){
    //         console.log(err);
    //         res.redirect("/lists/todo");
    //     }
    // },
    // addTask: async (req, res) => {
    //     const index = req.body.taskName.findIndex(e => e!=='');
    //     try{
    //         // await Task.create({
    //         //     title: req.body.taskName[index],
    //         //     list: req.listId,
    //         //     user: req.user.id[index],
    //         //     due: req.body.dueDate[index],
    //         //     recurrent: req.body.frequency[index] ? true : false,
    //         //     frequency: req.body.frequency[index]
    //         // });
    //         res.redirect("/lists/todo");
    //     } catch (err){
    //         console.log(err);
    //         res.redirect("/lists/todo");
    //     }
    // }
};