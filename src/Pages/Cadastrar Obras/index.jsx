import { useState } from "react"
import Header from "../../Components/Header"
import './style.css'
import { api } from "../../Services/API"

export const CadastrarObras = () => {

    const [titulo, setTitulo] = useState('')
    const [autores, setAutores] = useState('')
    const [resumo, setResumo] = useState('')
    const [descricao, setDescricao] = useState('')

    const adicionarObras = async () => {
        const data = {
            titulo,
            autores,
            descricao,
            resumo
        }

        try{
            const res = await api.post('/cadastro_obras', data)
            console.log(res)
        }catch(err){
            console.log(err)
        }
    }

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
                            <input type="text" onChange={(e) => setTitulo(e.target.value)}/>
                        </div>

                        <div className="main-cadastrar-obras-formulario-titulo-autores">
                            <h2>Autores:</h2>
                            <input type="text" onChange={(e) => setAutores(e.target.value)}/>
                        </div>
                    </div>
                    <div className="main-cadastrar-obras-formulario-resumo">
                        <div className="main-cadastrar-obras-formulario-resumo-divisao">
                            <h3>Resumo:</h3>
                            <textarea type="text" wrap="soft" onChange={(e) => setResumo(e.target.value)}/>

                        </div>
                    </div>
                    <div className="main-cadastrar-obras-formulario-descricao">
                        <div className="main-cadastrar-obras-formulario-descricao-divisao">
                            <h3>Descrição:</h3>
                            <textarea type="text" wrap="soft" onChange={(e) => setDescricao(e.target.value)}/>
                        </div>
                    </div>
                </div>

                <div className="main-cadastrar-obras-botao">
                    <button onClick={adicionarObras}>Publicar</button>
                </div>

            </main>

        </div>
    )
}