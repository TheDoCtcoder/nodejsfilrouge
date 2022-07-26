const yup = require('yup');
const pwdRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W]).+$/;

const registerValidator = yup.object({
    pseudo : yup.string().trim().required().min(3).max(50),
    email : yup.string().trim().email().required().max(255),
    firstname : yup.string().trim().required().max(150),
    lastname : yup.string().trim().required().max(150),
    password : yup.string().required().min(8).max(64).matches(pwdRegex)

});


const loginValidator = yup.object({
    Credential : yup.string().trim().required().max(255),
    password : yup.string().required()
});

module.exports = { registerValidator, loginValidator};