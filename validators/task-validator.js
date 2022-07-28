const yup = require('yup');
const idRegex = /^[a-f\d]{24}$/i;
const statusRegex = /^(created)|(pending)|(done)$/i;
const dateRegex = /^[0-9]{4}-((0[1-9])|(1[0-2]))-[0-3][0-9]$/;
const taskValidator = yup.object({
    name : yup.string().trim().required().min(3).max(255),
    description : yup.string().trim().max(1500),
    categoryID : yup.string().required().matches(idRegex),
    senderUserId : yup.string().required().matches(idRegex),
    receiverUserId : yup.string().required().matches(idRegex),
    expectedEndindDate : yup.string().matches(dateRegex)
});
const insertTaskValidator = yup.object({
    name : yup.string().trim().required().min(3).max(255),
    description : yup.string().trim().max(1500),
    categoryID : yup.string().required().matches(idRegex),
    senderUserId : yup.string().matches(idRegex),
    receiverUserId : yup.string().required().matches(idRegex),
    status : yup.string().matches(statusRegex),
    expectedEndindDate : yup.string().matches(dateRegex)
});
const updateTaskValidator = yup.object({
    name : yup.string().trim().required().min(3).max(255),
    description : yup.string().trim().max(1500),
    categoryID : yup.string().required().matches(idRegex),
    receiverUserId : yup.string().required().matches(idRegex),
    status : yup.string().required().matches(statusRegex),
    expectedEndindDate : yup.string().matches(dateRegex)
});



module.exports =  {taskValidator, insertTaskValidator, updateTaskValidator};
