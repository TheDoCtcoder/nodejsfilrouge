// const categoryValidator = require('"../validators/category-validator')


const bodyValidation = (yupValidator) => {

    return async (req, res, next) => {
        try {
            const validData = await yupValidator.noUnknown().validate(req.body, {abortEarly : false});
            req.body = validData;
            next();
        }
        catch(e) {
            res.sendStatus(400); //bad request
        }

    }
}

module.exports = bodyValidation;