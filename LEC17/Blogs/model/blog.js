const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BlogPost = new Schema({
  title: String,
  body: String,
  date: Date
});

const MyModel = mongoose.model('Blogs', BlogPost);// (modelname, schema name)
//ab is model ko use krke hm crud operations perform kr skte 

module.exports = MyModel; //for using this in serverjs