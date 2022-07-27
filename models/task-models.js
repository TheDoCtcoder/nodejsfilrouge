const {Schema, model , Types} = require('mongoose');
const Category = require('./category-model');
const User = require('./user-model');

const taskSchema = new Schema({
    name : {
        type : String,
        required : true,
        trim : true

    },
    description : {
        type : String,
        trim : true,
    },
    categoryID : {
        type : Types.ObjectId,
        ref : Category,
        required : true
    },
    senderUserId : {
        type : Types.ObjectId,
        ref : User,
        required : true
    },
    receiverUserId : {
        type : Types.ObjectId,
        ref : User,
        required : true
    },
    expectedEndindDate : {
        type : String,
        required : false

    },
    status : {
        type : String,
        enum : ['Created', 'Pending', 'Done'],
        default : 'Created',
        required : true,

    }


},{
    collection : 'Task',
    timestamps: true
});

const Task = model("Task", taskSchema);

module.exports = Task;