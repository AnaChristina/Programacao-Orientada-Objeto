import { Component } from "react";

type props = {
    tema: string
}



export default class CadastroServico extends Component<props> {
    handleClick() {
        console.log('Limpo');
    }
    
    componentDidMount() {
        // Inicializando os selects
        const elems = document.querySelectorAll('select');
        M.FormSelect.init(elems);
    }
    
    render() {
        let estiloBotao = `btn waves-effect waves-light ${this.props.tema}`
        return (
            <div className="row">
                <form className="col s4">
                    <div className="row campo sombra">

                        <div className="input-field col s12">
                            <input id="nome_servico" type="text" className="validate" />
                            <label htmlFor="nome_produto">Nome do servico</label>
                        </div>

                        <div className="input-field col s6">
                            <input id="valor_servico" type="text" className="validate" />
                            <label htmlFor="valor_servico">Valor:</label>
                        </div>

                        <div className="row">
                            <div className="col s12 mr">
                                <button className="btn waves-effect waves-light btn-limpar" onClick={() => this.handleClick()} type="submit" name="action">Limpar</button>
                                <button className="btn waves-effect waves-light btn-cadastrar" type="submit" name="action">Cadastrar</button>
                            </div>
                        </div>
                    </div>
                </form>
                <div className="col s12">
                    <div className="input-field border-select col s3 campo sombra border-select">
                        <select>
                        <option value="AAA" disabled selected>Mostrar aqui os servicos recem cadastrados</option>
                        <option value="1">servico 1</option>
                        <option value="2">servico 2</option>
                        <option value="3">servico 3</option>
                        </select>
                    </div>
                    <div className="input-field border-select col s2 campo sombra">
                        <select>
                        <option value="AAA" disabled selected>servicos mais consumidos</option>
                        <option value="1">servico 1</option>
                        <option value="2">servico 2</option>
                        <option value="3">servico 3</option>
                        </select>
                    </div>
                    <div className="input-field border-select col s2 campo sombra">
                        <select>
                        <option value="" disabled selected className="material-icons">maior consumo feminino</option>
                        <option value="1">servico 1</option>
                        <option value="2">servico 2</option>
                        <option value="3">servico 3</option>
                        </select>
                        <label><i className="material-icons custom-icon-pink">female</i></label>
                    </div>
                    <div className="input-field border-select col s2 campo sombra">
                        <select>
                        <option value="" disabled selected>maior consumo masculino</option>
                        <option value="1">servico 1</option>
                        <option value="2">servico 2</option>
                        <option value="3">servico 3</option>
                        </select>
                        <label><i className="material-icons custom-icon-blue">male</i></label>
                    </div>
                </div>
            </div>
        )
    }
}