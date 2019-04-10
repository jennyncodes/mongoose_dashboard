
const Dog = require("../models/dog").Dog;

module.exports ={
    index: function(req, res){
        Dog.find({}, function(err, dogs){
            if(err){
                console.log(err);
            }
            else{
                res.render('index', {dogs:dogs});
            }
        });
    },
    show: function(req, res){
        Dog.findById(req.params.id, function(err, dog){
            if(err){
                console.log(err);
            }
            else{
                res.render("dog", {dog:dog});
            }
        })

    },
    dogForm: function(req, res){
        res.render("new");
    },
    newDog: function(req,res){
        var dog = new Dog({name: req.body.name, age: req.body.age});
	    dog.save(function(err){
            if(err){
                res.render("new", {errors: dog.errors});
            }
            else{
                res.redirect("/");
            }
	    })

    },
    edit: function(req, res){
        Dog.findById(req.params.id, function(err, dog){
            if(err){
                console.log(err);
            }
            else{
                res.render("edit", {dog:dog});
            }
        })
    },
    editDog: function(req, res){
        Dog.findById(req.params.id, function(err, dog){
            if(err){
                console.log(err);
            }
            else{
                Dog.update({_id: dog._id}, {$set: {name: req.body.name, age: req.body.age}}, {upsert: true}, function(err){
                    if(err){
                        console.log(err);
                    }
                    else{
                        res.redirect("/");
                    }
                })
            }
        })
    },
    delete: function(req, res){
        Dog.findById(req.params.id, function(err, dog){
            if(err){
                console.log(err);
                res.render("edit", {dog: dog, errors: dog.errors})
            }
            else{
                Dog.remove({_id: dog._id}, function(err){
                    if(err){
                        console.log(err);
                        console.log("Error on delete");
                    }
                    else{
                        res.redirect("/");
                    }
                });
    
            }
        })
    }
}