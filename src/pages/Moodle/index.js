/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */

import React, {useState} from 'react';


import './styles.css'

import CardMoodle from '../../components/CardMoodle'

import { Link } from 'react-router-dom'

function Moodle() {

const showNavbar = (toggleId, navId, bodyId, headerId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId),
    bodypd = document.getElementById(bodyId),
    headerpd = document.getElementById(headerId)

   
    if(toggle && nav && bodypd && headerpd){
        toggle.addEventListener('click', ()=>{
          
            nav.classList.toggle('show')
          
            toggle.classList.toggle('bx-x')
        
            bodypd.classList.toggle('body-pd')
     
            headerpd.classList.toggle('body-pd')
        })
    }
}

showNavbar('header-toggle','nav-bar','body-pd','header')


const linkColor = document.querySelectorAll('.nav__link')

function colorLink(){
    if(linkColor){
        linkColor.forEach(l=> l.classList.remove('active'))
        this.classList.add('active')
    }
}
linkColor.forEach(l=> l.addEventListener('click', colorLink))

const[nome, Setnome] = useState('');

    const logout = ()=>{
        const token = localStorage.getItem('token')
        const email = localStorage.getItem('email')
        if(token !== null && email !== null){
            localStorage.removeItem('token')
            localStorage.removeItem('email')
            window.location.assign("https://conscire-front.herokuapp.com/")
        }
    }

    window.onload = ()=>{
       const email = localStorage.getItem('email')
       if(email != null){
           Setnome(email)
       }
    }

    return (
        <>
        <body id="body-pd">
            <header class="header" id="header">
                <div className="header__toggle">
                    <i className='bx bx-menu' id="header-toggle"></i>
                </div>

                <div className="header__img">
                    <img src="" alt=""/>
                </div>
            </header>

        <div className="l-navbar" id="nav-bar">
            <nav className="nav">
                <div>
                    <Link to="/" className="nav__logo">
                        <i className='bx bx-layer nav__logo-icon'></i>
                        <span className="nav__logo-name">Conscire</span>
                    </Link>

                    <div className="nav__list">
                        <Link to="/moodle" className="nav__link active">
                        <i className='bx bx-grid-alt nav__icon' ></i>
                            <span className="nav__name">Painel Geral</span>
                        </Link>

                        <Link to="/moodle" className="nav__link">
                            <i className='bx bx-user nav__icon' ></i>
                            <span className="nav__name">Perfil</span>
                        </Link>
                        
                        <Link to="/quiz" className="nav__link">
                            <i className='bx bx-brain nav__icon' ></i>
                            <span className="nav__name">Quiz</span>
                        </Link>

                        <Link to="/audit" className="nav__link">
                            <i className='bx bx-brain nav__icon' ></i>
                            <span className="nav__name">Teste Audit</span>
                        </Link>

                        <Link to="/resultadoAudit" className="nav__link">
                            <i className='bx bx-trophy nav__icon' ></i>
                            <span className="nav__name">Resultado Audit</span>
                        </Link>
	    
	    		<Link to="/monitoramento" className="nav__link">
                            <i className='bx bx-check nav__icon' ></i>
                            <span className="nav__name">Monitoramento</span>
                        </Link>

                    </div>
                </div>

                <Link to="/" className="nav__link">
                    <i className='bx bx-log-out nav__icon' ></i>
                    <span className="nav__name" onClick={logout}>Sair</span>
                </Link>

                <Link to="/moodle" className="nav__link">
                    <i className='bx bx-log-out nav__icon' ></i>
                    <span className="nav__name">Deletar Conta</span>
                </Link>
            </nav>
        </div>

        <div className="container">
            <div className="row" >
		<h5>Boas vindas usu??rio, este ?? o seu email cadastrado em nossa plataforma: {nome}</h5>
            <CardMoodle 
            linkAdrress={"https://www.ted.com/talks/rod_phillips_a_brief_history_of_alcohol/transcript?language=pt-br#t-8168"}
            image={require("../../assets/images/historia-das-bebidas.png").default}
            description={"Voc?? sabe como as bebidas alco??licas surgiram? Aqui nesse v??deo, Rod Phillips explica essa hist??ria por meio de uma animac??o. Venha conferir!"}
            title={"HIST??RIA DAS BEBIDAS"}
            />

            <CardMoodle 
            linkAdrress={"/quiz"}
            image={require("../../assets/images/quiz.png").default}
            description={"E ai, j?? tomou um gole de consci??ncia no nosso site? Entao venha responder nosso Quiz, marcar muitos pontos e escalar nosso ranking!"}
            title={"QUIZ"}
            />

            <CardMoodle 
            linkAdrress={"/audit"}
            image={require("../../assets/images/teste-audit.png").default}
            description={"O AUDIT - Alcool Use Disorders Identification Test ?? um instrumento de avalia????o desenvolvido pela Organiza????o Mundial de Sa??de (OMS)."}
            title={"TESTE AUDIT"}
            />

            <CardMoodle 
            linkAdrress={"#"}
            image={require("../../assets/images/efeitos-da-bebida.jpeg").default}
            description={"Voc?? j?? se perguntou como o corpo reage ao ??lcool ingerido? A revista Mundo Estranho conta o que acontece em v??rios ??rg??os do nosso organismo."}
            title={"COMO O ORGANISMO REAGE AO ??LCOOL?"}
            />

            <CardMoodle 
            linkAdrress={"https://cisa.org.br/index.php/sua-saude/informativos/artigo/item/248-influencias-das-midias-sociais-no-consumo-de-alcool-entre-adolescentes-e-jovens"}
            image={require("../../assets/images/influencia-das-bebidas.png").default}
            description={"Voc?? acredita no poder da influ??ncia das m??dias? Aqui voc?? pode ver como as m??dias sociais podem influenciar o comportamento dos jovens em rela????o ??s bebidas alco??licas."}
            title={"M??DIAS SOCIAIS E SUA INFLU??NCIA"}
            />

            <CardMoodle 
            linkAdrress={"https://cisa.org.br/index.php/sua-saude/informativos/artigo/item/47-metabolismo-do-alcool"}
            image={require("../../assets/images/metabolismo-do-alcool.png").default}
            description={"Voc?? sabia que da ingest??o at?? ser eliminado, o ??lcool passa por diversas fases de metaboliza????o dentro do nosso organismo?"}
            title={"METABOLISMO DO ??LCOOL"}
            />

            </div>
        </div>
    </body>
    </>
    )
}

export default Moodle
