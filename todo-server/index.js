// Importações dos modulos
const express = require("express");
const app = express();
const cors = require("cors");
const body_parser = require("body-parser");
// Importação do script externo para conexão com banco de dados
const mysql = require("./conexao");

// Associando Cors e Body Parser ao Express
app.use(cors());
app.use(express.json());
app.use(body_parser.urlencoded({extended: true}));

// Aqui roteamos uma porta para o cliente inserir dados
app.post("/api/insert", (pedido, resposta) => {
    mysql.banco_dados.query("INSERT INTO TAREFAS_TB (nome) VALUES (?)", [pedido.body.tarefa_middle]);
});

// Aqui roteamos uma porta para o cliente coletar dados
app.get("/api/select", (pedido, resposta) => {
    mysql.banco_dados.query("SELECT * FROM TAREFAS_TB", (error, resultado) => {
        resposta.send(resultado);
    });
});

// Aqui roteamos uma porta para o cliente enviar o id de um elemento
app.delete("/api/delete/:element_id", (pedido, resposta) => {
    // Com o valor do id definido, nos agora o-deletamos usando SQL
    mysql.banco_dados.query(`DELETE FROM TAREFAS_TB WHERE id = ${pedido.params.element_id}`);
});

// Inicia o servidor
app.listen(3001, ()=>{console.info("Servidor iniciado com sucesso.");});