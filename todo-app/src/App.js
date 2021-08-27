import './App.css';
import { Tarefas } from './Components/Tarefas';
import { useState } from 'react';
// Usamos Axios para fazer requisições HTTP
import Axios from 'axios';

export default function App() {

  const [tarefa, setTarefa] = useState("");

  function enviarTarefa() {
    // Aqui alocamos a variavel denominada pelo input na rota criada pelo express
    Axios.post("http://localhost:3001/api/insert", {tarefa_middle : tarefa})
    // Utilizamos o metodo POST para enviar um valor
  }

  return (
    /*App*/
    <div className="app">
      
      {/*Toolbar*/}
      <div className="toolbar">
        <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K" width="50" alt="React Logo" />
        <span>rest api com react</span>
      </div>

      {/*Container*/}
      <div className="container">

        {/*Mini Layout*/}
        <div className="mini-layout">

          {/*Input e Button*/}
          <div className="d-flex">
            <div className="form-floating w-75">
              <input type="text" className="form-control" id="floatingInput" onChange={(me) => {setTarefa(me.target.value)}} placeholder="Digite sua tarefa" />
              <label for="floatingInput">Digite sua tarefa</label>
            </div>
            <button type="button" onClick={enviarTarefa} className="btn btn-success w-25 text-uppercase">adicionar</button>
          </div>

          {/*Componente externo que lista as tarefas do banco de dados*/}
          <Tarefas></Tarefas>

        </div>
      </div>

    </div>
  );
}