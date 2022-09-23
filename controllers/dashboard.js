module.exports = {
    getDashboard: (req, res) => {
        try{
            console.log("We're in!");
            res.render("dashboard.ejs");
        }
        catch(err){
            console.log(err);
        }
    }
};
