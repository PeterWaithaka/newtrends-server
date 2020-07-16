var mongoose =require('mongoose');
var ObjectId = mongoose.Schema.ObjectId ;

var Schema = mongoose.Schema;

var UserSchema= new mongoose.Schema({
	name  :{type  :String, required:true},
	email  :{type  :String, required  :true , unique:true, trim :true},
	phone  :{ type :String , unique :true, required :true },
	role 	 :{ type: String },
	password  :{ type  :String, required:true, default :"secret", trim :true },
	username  :{ type:String },
	shopName: String,
	ownerName: String,
	manager: String,
	opposite: String,
	placeNear: String,
	kraPin: String,
	bankAccount: String,
	location: {type: String },
	street:{type: String },
	house: {type: String},
	landmark: {type: String},
	other_details: {type: String},
	otp: { type: String },
    rawPhone: { type: String },
    approved: { type: Boolean, default: false },
    verified: { type: Boolean, default: false  },
	ban :{type :Boolean, default :false},
	wholesaler_status: {type: Boolean, default: false},
	wholesaler_req: {type: String},
	client_type: {type: String},
	idOne: String,
	idTwo: String,
	shopImages: [],
	recoveryData: { type: String },
	temporaryPassword: { date: Date, value: String },
	recovery  :{ 
			confirmed  :{type:Boolean, default:false},
			when  : {type  :Date },
	},
	facebook :{
	    id: String,
	    token: String,
	    email: String,
	    name: String,
	    username: String,
	},
	google: {
	    id: String,
	    token: String,
	    email: String,
	    name: String,
	},
	twitter: {
	    id: String,
	    token: String,
	    displayName: String,
	    username: String,
	},
	image :{ type :String },
	createdAt  :{type:Date, default  :Date.now },
	listings :[{type:ObjectId, ref :'Business'}]
})

module.exports=mongoose.model('User', UserSchema);
