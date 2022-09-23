module.exports = {
    getDashboard: (req, res) => {
        try{
            res.render("dashboard.ejs", {user: req.user});
        }
        catch(err){
            console.log(err);
        }
    }
};
