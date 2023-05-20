import Header from "../../Components/Header"
import './style.css'

export const CadastrarObras = () => {
    return(
        <div>
            <Header/>
            <main className="main-cadastrar-obras">
                <div className="main-cadastrar-obras-titulo">
                    <h2>Publicar Obras</h2>
                </div>
                <div className="main-cadastrar-obras-formulario">
                    <div className="main-cadastrar-obras-formulario-titulo">
                        <div className="main-cadastrar-obras-formulario-titulo-titulo">
                            <h2>Titulo:</h2>
                            <input type="text" />
                        </div>

                        <div className="main-cadastrar-obras-formulario-titulo-autores">
                            <h2>Autores:</h2>
                            <input type="text" />
                        </div>
                    </div>
                    <div className="main-cadastrar-obras-formulario-resumo">
                        <div className="main-cadastrar-obras-formulario-resumo-divisao">
                            <h3>Resumo:</h3>
                            <input type="text"/>
                        </div>
                    </div>
                    <div className="main-cadastrar-obras-formulario-descricao">
                        <div className="main-cadastrar-obras-formulario-descricao-divisao">
                            <h3>Descrição:</h3>
                            <input type="text" name="" id="" />
                        </div>
                    </div>
                </div>

                <div className="main-cadastrar-obras-botao">
                    <button>Publicar</button>
                </div>

            </main>

        </div>
    )
}