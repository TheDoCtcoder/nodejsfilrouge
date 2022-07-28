const Task = require("../models/task-models");

const taskController = {
// getAll : ()  => {

// },
getAll : async (req,res)  => {


    const offset = req.query.offset ? req.query.offset : 0;
    const limit = req.query.limit ? req.query.limit : 10;

    let statusFilter;
    const status = req.query.status;


    if(status) {
            if(Array.isArray(status)){
                statusFilter = {status : {$in : status}}
            }
            else {
                statusFilter = {status : status }
            }
    }

    else {
        statusFilter = {}
    }


const tasks = await Task.find(statusFilter)
.populate({
    path : 'categoryID',
    select : {name : 1, icon : 1}
})
.populate({
    path : 'senderUserId',
    select : {firstname : 1, lastname : 1, pseudo : 1}
})
.populate({
    path : 'receiverUserId',
    select : {firstname : 1, lastname : 1, pseudo : 1}
}).limit(limit).skip(offset)


// const users = await (User.find());
const count = await Task.countDocuments();
const data = {'tasks' : tasks, count : count}

res.status(200).json(data);

},
getById : async (req, res) => {
    const id = req.params.id;
    const task = await Task.findById(id)
.populate({
    path : 'categoryID',
    select : {name : 1, icon : 1}
})
.populate({
    path : 'senderUserId',
    select : {firstname : 1, lastname : 1, pseudo : 1}
})
.populate({
    path : 'receiverUserId',
    select : {firstname : 1, lastname : 1, pseudo : 1}
})
if(!task){
    res.sendStatus(404);
}

// const users = await (User.find());
res.status(200).json(task);


},
getByCategory : async (req, res) => {
    const offset = req.query.offset ? req.query.offset : 0;
    const limit = req.query.limit ? req.query.limit : 10;
    const id = req.params.id
    
    let statusFilter;
    const status = req.query.status;


    if(status) {
            if(Array.isArray(status)){
                statusFilter = {status : {$in : status}}
            }
            else {
                statusFilter = {status : status }
            }
    }

    else {
        statusFilter = {}
    }
    const  categoryFilter = {categoryID : id}
    const task= await Task.find({$and : [categoryFilter, statusFilter] })
    .populate({
        path : 'categoryID',
        select : {name : 1, icon : 1}
    })
    .populate({
        path : 'senderUserId',
        select : {firstname : 1, lastname : 1, pseudo : 1}
    })
    .populate({
        path : 'receiverUserId',
        select : {firstname : 1, lastname : 1, pseudo : 1}
    }).limit(limit).skip(offset)
    const count = await Task.countDocuments(categoryFilter);
    const data = {'tasks' : task, count : count}
    res.status(200).json(data)

},

getByUser : async (req,res) => {
    const id = req.params.id
    const offset = req.query.offset ? req.query.offset : 0;
    const limit = req.query.limit ? req.query.limit : 10;
    let statusFilter;
    const status = req.query.status;


    if(status) {
            if(Array.isArray(status)){
                statusFilter = {status : {$in : status}}
            }
            else {
                statusFilter = {status : status }
            }
    }

    else {
        statusFilter = {}
    }
    const receiverFilter = {receiverFilter, statusFilter}
    // const  categoryFilter = {categoryID : id}
    const task= await Task.find({$and: [receiverUserId, statusFilter]})
    .populate({
        path : 'categoryID',
        select : {name : 1, icon : 1}
    })
    .populate({
        path : 'senderUserId',
        select : {firstname : 1, lastname : 1, pseudo : 1}
    })
    .populate({
        path : 'receiverUserId',
        select : {firstname : 1, lastname : 1, pseudo : 1}
    }).limit(limit).skip(offset)
    const count = await Task.countDocuments(receiverUserId);
    const data = {'tasks' : task, count : count}
    res.status(200).json(data)

},

Create : async (req,res) => {
    const taskToAdd = Task(req.body);
    await taskToAdd.save();
    res.status(200).json(taskToAdd);
},
Update: async (req, res) => {
    const id =  req.params.id;
    const {name, description, categoryID, receiverUserId, status, expectedEndingDate} = req.body
   const taskUpdated = await Task.findByIdAndUpdate(id, {
        name,
        categoryID,
        receiverUserId,
        status,
        description : description ? description : null,
        expectedEndingDate : expectedEndingDate ? expectedEndingDate : null

    }, { returnDocument : 'after'});
    if(!taskUpdated){
        return res.sendStatus(404);
    }
    res.status(201).json({message : "Catégorie modifiée"});


},
Delete: async (req, res) => {
    const id = req.params.id;
    const taskToDelete = await Task.findByIdAndDelete(id);
    if(!taskToDelete) {
        return res.sendStatus(404);
    }
    res.status(201).json({ message : "catégorie supprimée"});


}

}

module.exports = taskController;