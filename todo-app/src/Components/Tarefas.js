import { Component } from "react";
import './Tarefas.css'
// Usamos Axios para fazer requisições HTTP
import Axios from 'axios';

export class Tarefas extends Component {

    // Utilizamos o metodo construtor para alocar memoria
    constructor (props) {
        super(props)

        // utilizamos state para implementar a estrutura json em uma array
        this.state = {
            tarefas : [],
        }
    }

    // O método componentDidMount é chamado sempre a aplicação é inicializada
    componentDidMount() {
        // Aqui trazemos a estrutura json da rota /api/select para o estado "tarefas"
        Axios.get("http://localhost:3001/api/select").then(response => this.setState({tarefas: response.data}));
    }

    excluirTarefa(id) {
        Axios.post("http://localhost:3001/api/delete", {id_middle : id})
    }

    render() {
        return (
            // Aqui fazemos um mapeamento para cada objeto dentro de "tarefas", semelhante ao ForEach
            this.state.tarefas.map(items => 
                <div className="tarefa-layout" key={items.id}>
                    <div className="tarefa-barra flex-center">{items.nome}</div>
                    <button type="button" onClick={ () => {this.excluirTarefa(items.id)} } className="btn btn-danger w-25 text-uppercase">excluir</button>
                </div>
            )
        );
    }
}