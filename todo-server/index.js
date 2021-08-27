// Importações dos modulos
const express = require("express");
const app = express();
const cors = require("cors");
const body_parser = require("body-parser");
const mysql = require("mysql");

// Associando Cors e Body Parser ao Express
app.use(cors());
app.use(express.json());
app.use(body_parser.urlencoded({extended: true}));

// Definindo acesso para conexão com banco de dados MySQL
const banco_dados = mysql.createConnection({
    host: "localhost",
    user: "seuuser",
    password: "suasenha",
    database: "TODO_DB"
});

// Fazendo conexão com banco de dados MySQL
banco_dados.connect((erro) => {
    if (erro) throw erro;
    console.log("Banco de dados conectado.");
});

// Aqui roteamos uma porta para o cliente inserir dados
app.post("/api/insert", (pedido, resposta) => {
    banco_dados.query("INSERT INTO TAREFAS_TB (nome) VALUES (?)", [pedido.body.tarefa_middle]);
});

// Aqui roteamos uma porta para o cliente coletar dados
app.get("/api/select", (pedido, resposta) => {
    banco_dados.query("SELECT * FROM TAREFAS_TB", (error, resultado) => {
        resposta.send(resultado);
    });
});

// Aqui roteamos uma porta para o cliente deletar dados
app.post("/api/delete", (pedido, resposta) => {
    banco_dados.query("DELETE FROM TAREFAS_TB WHERE id = ?", [pedido.body.id_middle]);
});

// Inicia o servidor
app.listen(3001, ()=>{console.info("Servidor iniciado com sucesso.");});