module.exports = {
    getTask: async (req, res) => {
        try {
        const task = await Task.findById(req.params.id);
        res.render("list.ejs", { task: task, user: req.user});
        } catch (err) {
        console.log(err);
        }
    },
    createTask: async (req, res) => {
        try {
        await Task.create({
            title: req.body.title,
            task: req.body.task,
            likes: 0,
            user: req.user.id,
        });
        console.log("List has been added!");
        res.redirect("/lists");
        } catch (err) {
        console.log(err);
        }
    }
};