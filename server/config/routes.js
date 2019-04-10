
var dogs= require("../controllers/dogs");

module.exports= function(app){
    app.get('/', function(req, res){
    dogs.index(req, res);
    })
    //display one dog information
    app.get("/dogs/:id", function(req, res){
        dogs.show(req, res);
    })

    //display a form for making a new dog.
    app.get("/new/", function(req, res){
        dogs.dogForm(req,res);
    })

    //action of creating a new dog
    app.post("/dogs/new", function(req, res){
        dogs.newDog(req, res);
    })

    //show a form to edit an existing dog
    app.get("/dogs/edit/:id", function(req, res){
        dogs.edit(req, res);
    })
    //action for editing a dog
    app.post("/dogs/:id", function(req, res){
        dogs.editDog(req, res);
    })

    //delete a dog
    app.post("/dogs/delete/:id", function(req, res){
        dogs.delete(req,res);
    })
}