const Task = require("../models/task-models");

const taskController = {
getAll : ()  => {

},
getById : () => {

},
getByCategory : () => {

},
getByUser : () => {

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