const { check } = require("express-validator");
const validateResult = require("../../helpers/validateUser");

const userValidation = [
    check('Nombre')
        .exists().withMessage('Nombre es requerido')
        .isLength({ min: 3, max: 50 }).withMessage('Nombre debe tener entre 3 y 50 caracteres'),
    check('Apellido')
        .exists().withMessage('Apellido es requerido')
        .isLength({ min: 3, max: 50 }).withMessage('Apellido debe tener entre 3 y 50 caracteres'),
    check('Email')
        .exists().withMessage('Email es requerido')
        .isEmail().withMessage('Debe ser un correo electrónico'),
        (req, res, next) => {
            validateResult(req, res, next);
        }
]

module.exports = {
    userValidation
}