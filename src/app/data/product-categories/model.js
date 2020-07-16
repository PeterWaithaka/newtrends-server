var mongoose =require('mongoose');
//  var ObjectId = mongoose.Schema.ObjectId ;

var CategorySchema= new mongoose.Schema({
    name :{ type :String, required :true },
    url: { type: String },
    title :{ type :String },
    metaDescription: { type: String },
    image: { type: String },
    subcategories :[
        {
            name: String,
            title: String,
            categories: [],
            url: { type: String },
        }
    ],
    abr :{ type :String }
});

module.exports=mongoose.model('ProductCategory', CategorySchema);