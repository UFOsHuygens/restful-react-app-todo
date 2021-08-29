const mysql = require("mysql");

// Definindo acesso para conexão com banco de dados MySQL
const banco_dados = mysql.createConnection({
    host: "localhost",
    user: "seuusername",
    password: "suasenha",
    database: "TODO_DB"
});

// Fazendo conexão com banco de dados MySQL
banco_dados.connect((erro) => {
    if (erro) throw erro;
    console.log("Banco de dados conectado.");
});

exports.banco_dados = banco_dados