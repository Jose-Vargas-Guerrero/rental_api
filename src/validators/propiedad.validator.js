import {param,body} from 'express-validator'
import {validateResult} from '../middlewares/validation.middleware.js'

export const validatePropiedad = [
    /* 
        {
      "nombre": "apartamento",
      "descripcion": "apartamento amueblado y con grandes medidas en edificio exclusivo en el centro de la ciuddad",
      "habitaciones": 5,
      "sanitarios": 4,
      "garaje": 4
}
    */
    body('nombre')
        .trim()
        .notEmpty().withMessage('el campo nombre no puede ir vacio')
        .bail()
        .isLength({min: 3}).withMessage('el campo debe contener al menos 3 caracteres'),
    body('descripcion')
        .trim()
        .notEmpty('').withMessage('el campo descripcion no debe ir vacio'),
    body('habitaciones')    
        .trim()
        .notEmpty().withMessage('el campo habitaciones no debe ir vacio')
        .bail()
        .isInt().withMessage('el campo habitaciones debe ser un numero entero'),
    body('sanitarios')    
        .trim()
        .notEmpty().withMessage('el campo sanitarios no debe ir vacio')
        .bail()
        .isInt().withMessage('el campo sanitarios debe ser un numero entero'),
    body('garaje')    
        .trim()
        .notEmpty().withMessage('el campo garaje no debe ir vacio')
        .bail()
        .isInt().withMessage('el campo garaje debe ser un numero entero'),
    validateResult

];

export const validateID = [
    param('id')
        .trim()
        .notEmpty().withMessage('el campo id no debe ir vacio')
        .bail()
        .isInt().withMessage('el campo id debe ser un numero entero valido'),
    validateResult
]