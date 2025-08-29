const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  username:String,
  email:String,
  password:String,
  blogs:[
    {
      type:mongoose.Types.ObjectId,
      ref:"Blogs"
    }
  ]
});

const MyModel = mongoose.model('Users', UserSchema);// (modelname, schema name)
//ab is model ko use krke hm crud operations perform kr skte 

module.exports = MyModel; //for using this in serverjs