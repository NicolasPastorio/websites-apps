const db = require("./db")

function listarSalas(){
    // return [
    //     {
    //         "_id": {
    //             "$oid": "643ece43ea11e6e5b0421f10"
    //         },
    //         "nome": "Guerreiros da InfoCimol",
    //         "tipo": "publica"
    //     },
    //     {
    //         "_id": {
    //             "$oid": "643ecec1ea116e5b0421f12"
    //         },
    //         "nome": "Só os confirmados da INFO",
    //         "tipo": "privada",
    //         "chave": "at8q4haw"
    //     },
    //     {
    //         "_id": {
    //             "$oid": "643f22a2ea11e6e5b0421f18"
    //         },
    //         "nome": "Guerreiros da INFO",
    //         "tipo": "publica"
    //     }
    // ]
    return db.findAll("salas")
}

module.exports = {listarSalas}