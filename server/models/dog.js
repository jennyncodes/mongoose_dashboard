const mongoose= require('mongoose');
mongoose.connect('mongodb://localhost/basic_mongoose');
mongoose.Promise = global.Promise;

var DogSchema = new mongoose.Schema({
    name: {type: String, required:true},
    age: {type: Number, required: true},
}, {timestamps:true})
mongoose.model('Dog', DogSchema);

module.exports ={
    Dog: mongoose.model('Dog')
};
