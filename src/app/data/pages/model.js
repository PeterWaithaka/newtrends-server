const mongoose = require('mongoose');

const PageSchema = new mongoose.Schema({

    name: { type: String },
    url: { type: String, index: true },
    subPages: [ { name: String, url: String } ],
    uid: { type: String, unique: true },
    website: { type: String },
    parent: { type: Boolean, default: false }

});

module.exports = mongoose.model('page', PageSchema);
