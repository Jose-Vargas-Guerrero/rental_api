import {
    getAllPropertiesModel,
    getPropiedadByIDModel,
    createPropertyModel,
    updatePropertyModel,
    deletePropertyModel
} from '../models/rental.model.js'

export const getProperties = async (req,res,next) => {
    try {
        const properties = await getAllPropertiesModel();
        return res.json ({
            succes: true,
            data: properties
        })
    } catch (error) {
        next(error)
    }
}

export const getPropertyByID = async (req,res,next) => {
    try {
        const {id} = req.params;
        const property = await getPropiedadByIDModel(id)

        if (!property) {
            return res.status(404).json({
                succes: false,
                message: 'propiedad no encontrada'
            })
        }
        res.json({
            success: true,
            data: property
        })
        
    } catch (error) {
        next(error)
    }
}

export const createNewProperty = async (req,res,next) => {
    try {
        const newProperty = await createPropertyModel(req.body);
        res.status(201).json({
            success: true,
            message: 'nueva propiedad agregada correctamente',
            id: newProperty
        })
    } catch (error) {
        next(error)
    }
}

export const updateProperty = async (req,res,next) => {
    try {
        const {id} = req.params;
        const affectedRows = await updatePropertyModel(id, req.body);
        
        
        if (affectedRows === 0) {
            return res.status(404).json({succes: false, message: "propiedad no encontrada o actualizada"})
        }
        res.json({succes: true, message: 'propiedad actualizada correctamente'})
    } catch (error) {
        next(error)
    }
}

export const deleteProperty = async (req,res,next) => {
    try {
        const {id} = req.params;
        const property = await getPropiedadByIDModel(id)

        if (!property) {
            return res.status(400).json({succes: false, message: 'propiedad no encontrada'})
        }
        const newState = property.disponible === 1 ? 0 : 1;

        await deletePropertyModel(id,newState)

        res.json({
            success: true,
            message: `propiedad ${newState == 1 ? 'activada' : 'desactivada'} correctamente`,
            available: newState
        })

    } catch (error) {
        next(error)
    }
}