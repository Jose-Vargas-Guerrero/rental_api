import {pool} from '../db/index.js'

export const getAllPropertiesModel = async () => {
    const query = `SELECT * FROM rental_properties where disponible = 1`;
    const [rows] = await pool.query(query);
    return rows;
}

export const getPropiedadByIDModel = async (id) => {
    const query = `SELECT * FROM rental_properties where id = ?`
    const [rows] = await pool.query(query,[id])
    return rows[0];
}

/* "id": 2,
    "nombre": "apartamento en zona rural",
    "descripcion": "apartamento amueblado para capacidad de 5 personas",
    "habitaciones": 4,
    "sanitarios": 3,
    "garaje": 3,
    "disponible": 1 */

export const createPropertyModel = async (data) => {
    const {nombre,descripcion, habitaciones,sanitarios,garaje} = data;
    const query = `INSERT INTO rental_properties(nombre,descripcion, habitaciones,sanitarios,garaje)
                     values(?,?,?,?,?)`
    const [result] = await pool.query(query,[nombre,descripcion, habitaciones,sanitarios,garaje]);
    return result.insertId
    
}

export const updatePropertyModel = async (id,data) => {
        const {nombre,descripcion, habitaciones,sanitarios,garaje} = data;
        const query = `UPDATE rental_properties set nombre = ?,descripcion = ?, habitaciones = ?,sanitarios = ?,garaje = ?
                        WHERE id = ? `;
        const [rows] = await pool.query(query,[nombre,descripcion, habitaciones,sanitarios,garaje, id])
        return rows.affectedRows;
}


export const deletePropertyModel = async (id,newState) => {
    const query = `UPDATE rental_properties SET disponible = ? WHERE id = ?`;
    const [result] = await pool.query(query,[newState, id])
    return result.affectedRows;
}
