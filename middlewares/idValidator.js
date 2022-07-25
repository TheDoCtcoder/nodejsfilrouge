const  mongoose  = require("mongoose");

const idValidator = () => {
return (req, res, next) => {
    const id = req.params.id;
    if( !mongoose.isValidObjectId(id))
    {
        res.sendStatus(400);
    }
    next();
}
}

module.exports = idValidator;