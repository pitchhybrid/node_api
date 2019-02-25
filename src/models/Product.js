const mongoose = require('mongoose')
const mongoosePagination = require('mongoose-paginate-v2');

const procuctSchema = new mongoose.Schema({
    title:{
        required:true,
        type:String
    },
    description:{
        required:true,
        type:String
    },
    url:{
        required:true,
        type:String
    },
    createdAt:{
        type:Date,
        default:Date.now
    }
});

procuctSchema.plugin(mongoosePagination);

mongoose.model('Product',procuctSchema);