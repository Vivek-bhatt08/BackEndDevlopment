const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  email:String,
  password:String
});

const MyModel = mongoose.model('Users', UserSchema);// (modelname, schema name)
//ab is model ko use krke hm crud operations perform kr skte 

module.exports = MyModel; //for using this in serverjs