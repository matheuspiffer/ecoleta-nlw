const sqlite3 = require('sqlite3').verbose()
// iniciar o objeto de banco de dados

const db = new sqlite3.Database('./src/database/database.db')
module.exports = db
// db.serialize(() => {
//criar uma tabela
// db.run(`
//     CREATE TABLE IF NOT EXISTS places (
//         id INTEGER PRIMARY KEY AUTOINCREMENT,
//         image TEXT,
//         name TEXT,
//         address TEXT,
//         address2 TEXT,
//         state TEXT,
//         city TEXT,
//         items TEXT
//     );
// `)
// //inserir
// const query = `
// INSERT INTO places (
//     image,
//     name,
//     address,
//     address2,
//     state,
//     city,
//     items
// ) VALUES (?,?,?,?,?,?,?);`
// const values = [
//     "https://images.unsplash.com/photo-1528323273322-d81458248d40?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1101&q=80",
//     "Papersider",
//     "Guilherme Gemballa, Jardim America",
//     "Numero 260",
//     "Santa Catarina",
//     "Rio do Sul",
//     "Resíduos eletrônicos, Lâmpadas"
// ]


// function afterInsertData(err) {
//     if (err) {
//         return console.log(err)
//     }
//     console.log('Cadastrado com Sucesso')
//     console.log(this)
// }
// db.run(query, values, afterInsertData)

// consultar
// db.all(`SELECT * FROM places`, function (err, rows) {
//     if (err) {
//         return console.log(err)
//     }
//     console.log('Aqui estao os registros')
//     console.log(rows)
// })

// // deletar
// db.run(`DELETE FROM places WHERE id = ?`, [6], function (err) {
//     if (err) {
//         return console.log(err)
//     }
//     console.log('Deletado com sucesso')

// })

// })
