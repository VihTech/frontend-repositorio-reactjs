import Header from "../../Components/Header"
import {BsTrash3} from 'react-icons/bs'
import {FaEyeSlash, FaEye, FaUserAlt, FaUserCircle} from 'react-icons/fa'
import './style.css'
import { useState } from "react"

export const CadastrarUsuario = () => {

    const [verSenha, setVerSenha] = useState(false)
    const [verConfirmaSenha, setVerConfirmaSenha] = useState(false)

    const mostraConfirmaSenha = () => {
        if(verConfirmaSenha === false){
            setVerConfirmaSenha(true)
        }else{
            setVerConfirmaSenha(false)
        }
    }

    const mostrarSenha = () => {
        if (verSenha === false){
            setVerSenha(true)
        }else{
            setVerSenha(false)
        }
    }

    return(
        <div>
            <Header/>
            <main className="main-cadastrar-usuario">
                <div className="main-cadastrar-usuario-conteiner">
                    <div className="main-cadastrar-usuario-conteiner-usuarios">
                        <div className="main-cadastrar-usuario-conteiner-usuarios-texto">
                            <h2>Usuários Cadastrados</h2>
                        </div>
                        <div className="main-cadastrar-usuario-conteiner-usuarios-cadastrados">
                            <div className="main-cadastrar-usuario-conteiner-usuarios-cadastrados-divisao">
                                <p>Vitória</p>
                                <div className="main-cadastrar-usuario-conteiner-usuarios-cadastrados-divisao-img"><BsTrash3/></div>
                            </div>

                            <div className="main-cadastrar-usuario-conteiner-usuarios-cadastrados-divisao">
                                <p>Anderson</p>
                                <div className="main-cadastrar-usuario-conteiner-usuarios-cadastrados-divisao-img"><BsTrash3/></div>
                            </div>

                            <div className="main-cadastrar-usuario-conteiner-usuarios-cadastrados-divisao">
                                <p>Sérgio</p>
                                <div className="main-cadastrar-usuario-conteiner-usuarios-cadastrados-divisao-img"><BsTrash3/></div>
                            </div>


                        </div>
                    </div>
                    <div className="main-cadastrar-usuario-conteiner-formulario">
                        <div className="main-cadastrar-usuario-conteiner-formulario-titulo">
                            <h2>Cadastrar Usuário</h2>
                        </div>

                        <div className="main-cadastrar-usuario-conteiner-formulario-img">
                            <FaUserCircle/>
                        </div>

                        <div className="main-cadastrar-usuario-conteiner-formulario-formulario">
                            <p>Nome</p>
                            <div className="main-cadastrar-usuario-conteiner-formulario-formulario-input">

                                <div className="main-cadastrar-usuario-conteiner-formulario-formulario-input-img">
                                    <FaUserAlt/>
                                </div>
                                    <input type="text"/>

                                
                            </div>
                            

                            <p>Senha</p>
                            <div className="main-cadastrar-usuario-conteiner-formulario-formulario-input">

                                {verSenha === false ?(
                                    <>
                                        <div className="main-cadastrar-usuario-conteiner-formulario-formulario-input-img" onClick={mostrarSenha}>
                                            <FaEyeSlash/>
                                        </div>
                                        <input type="password"/>
                                    </>
                                    ):(
                                        <>
                                            <div className="main-cadastrar-usuario-conteiner-formulario-formulario-input-img" onClick={mostrarSenha}>
                                                <FaEye/>
                                            </div>
                                            <input type="text"/>
                                        </>
                                    )}
                                    

                            </div>

                            <p>Confirmar Senha</p>
                            <div className="main-cadastrar-usuario-conteiner-formulario-formulario-input">

                                {verConfirmaSenha === false ?(
                                    <>
                                        <div className="main-cadastrar-usuario-conteiner-formulario-formulario-input-img" onClick={mostraConfirmaSenha}>
                                            <FaEyeSlash/>
                                        </div>
                                        <input type="password"/>
                                    </>
                                    ):(
                                        <>
                                            <div className="main-cadastrar-usuario-conteiner-formulario-formulario-input-img" onClick={mostraConfirmaSenha}>
                                                <FaEye/>
                                            </div>
                                            <input type="text"/>
                                        </>
                                        )}
                            </div>
                        </div>

                        <div className="main-cadastrar-usuario-conteiner-formulario-btn">
                            <button>Cadastrar</button>
                        </div>


                    </div>
                </div>
            </main>
        </div>
    )
}