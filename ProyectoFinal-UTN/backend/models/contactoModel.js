var pool = require('../database/bd');

async function getContactos(){
    try {
        var query = "select * from contactos order by id desc";
        var rows = await pool.query(query);
        return rows;
    } catch (error) {
        throw error;
    }
}

async function insertContacto(obj){
    try{
        var query = "insert into contactos set ? ";
        var rows = await pool.query(query, [obj]);
        return rows
    } catch(error){
        console.log(error);
        throw error;
    }
}

async function deleteContactoById(obj){
    try {
        var query = "delete from contactos where id = ? ";
        var rows = await pool.query(query, [obj]);
        return rows
    } catch (error) {
        console.log(error);
        throw error;
    }
}

async function getContactoById(id){
    try {
        var query = "select * from contactos where id = ?";
        var rows = await pool.query(query, [id])
        return rows[0]
    } catch (error) {
        throw error
    }
}

async function modificarContactoById(obj, id) {
    try {
        var query = "update contactos set ? where id = ?";
        var rows = await pool.query(query, [obj, id])
        return rows
    } catch (error) {
        throw error
    }
}

module.exports = {getContactos, insertContacto, getContactoById, modificarContactoById, deleteContactoById}