var pool = require('../database/bd');

async function getPeliculas(){
    try {
        var query = "select * from peliculas order by id desc";
        var rows = await pool.query(query);
        return rows;
    } catch (error) {
        throw error;
    }
}

async function getPeliculasFiltered(busqueda = "", year = "" , genero = "", calificacion = "", pageNumber = ""){
    try {
        let query = "select * from peliculas "
        let queryWhere = " ";
        let orderBy = " order by id, año "
        //Compruebo cada parametro
        if(busqueda != "" || year != "" || genero != "" || calificacion != ""){
            queryWhere = queryWhere + "where true ";
            queryWhere = queryWhere + (busqueda != "" ? " AND (titulo LIKE '%"+ busqueda +"%' OR "+
            "director LIKE '%"+ busqueda +"%') " : "");
            queryWhere = queryWhere + (year != "" ? " AND año = " + Number(year) +" ": "");
            queryWhere = queryWhere + (genero != "" ? " AND genero LIKE '%"+ genero +"%' " : "");
            queryWhere = queryWhere + (calificacion != "" ? " AND calificacion = "+ Number(calificacion) +" ": "");
        }
        //Compruebo páginado
        //const page = Number(pageNumber) || 1;
        //orderBy = orderBy + " LIMIT 9 OFFSET"+ 9 * (page - 1) +";";
        query = query + queryWhere + orderBy;
        console.log(query);
        var rows = await pool.query(query);
        return rows;
    } catch (error) {
        console.log(error)
        throw error;
    }
}

async function insertPelicula(obj){
    try{
        var query = "insert into peliculas set ? ";
        var rows = await pool.query(query, [obj]);
        return rows
    } catch(error){
        console.log(error);
        throw error;
    }
}

async function deletePeliculaById(obj){
    try {
        var query = "delete from peliculas where id = ? ";
        var rows = await pool.query(query, [obj]);
        return rows
    } catch (error) {
        console.log(error);
        throw error;
    }
}

async function getPeliculaById(id){
    try {
        var query = "select * from peliculas where id = ?";
        var rows = await pool.query(query, [id])
        return rows[0]
    } catch (error) {
        throw error
    }
}

async function modificarPeliculaById(obj, id) {
    try {
        var query = "update peliculas set ? where id = ?";
        var rows = await pool.query(query, [obj, id])
        return rows
    } catch (error) {
        throw error
    }
}

module.exports = {getPeliculas, getPeliculasFiltered, insertPelicula, getPeliculaById, modificarPeliculaById, deletePeliculaById}