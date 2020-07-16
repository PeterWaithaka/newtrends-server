var mongoose =require('mongoose');
//  var ObjectId = mongoose.Schema.ObjectId ;

var BrandSchema= new mongoose.Schema({

    name: { type: String, required: true },
    metaTitle: { type: String },
    models: [],
    metaDescription: { type: String, default: '' },
    footerContent: { type: String },
    highlight: { type: String },
    h1: { type: String },
    image: { type: String },
    related: []

});

module.exports=mongoose.model('brand', BrandSchema);