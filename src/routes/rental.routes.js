import { Router } from "express";
import {
    getProperties,
    getPropertyByID,
    createNewProperty,
    updateProperty,
    deleteProperty
} from '../controller/rental.controller.js'
import {validatePropiedad,validateID} from '../validators/propiedad.validator.js'

const router = Router();

router.get('/',getProperties)
router.get('/:id',validateID, getPropertyByID)
router.post('/',validatePropiedad,createNewProperty)
router.put('/:id', validatePropiedad, updateProperty)
router.patch('/:id/toggle',validatePropiedad, deleteProperty);

export default router;