/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useState} from 'react';
import Axios from 'axios';

import Header from '../../components/Header'
import Footer from '../../components/Footer'

import './styles.css'

function Audit() {
    // Axios.defaults.withCredentials = true;    
    const [q1State, setQ1] = useState(0);
    const [q2State, setQ2] = useState(0);
    const [q3State, setQ3] = useState(0);
    const [q4State, setQ4] = useState(0);
    const [q5State, setQ5] = useState(0);
    const [q6State, setQ6] = useState(0);
    const [q7State, setQ7] = useState(0);
    const [q8State, setQ8] = useState(0);
    const [q9State, setQ9] = useState(0);
    const [q10State, setQ10] = useState(0);
    const [email, SetEmail] = useState(localStorage.getItem('email'));
    const [auth, setAuth] = useState(false)

//     window.onload = ()=>{
//         const email = localStorage.getItem('email')
//         if(email != null){
//             SetEmail(email)
//         }
//         console.log(email)
//      }

    const registeraudit = ()=>{
        Axios.put("https://conscire-api.herokuapp.com/audit/atualiza", {
        q1: q1State,
	    q2: q2State,
	    q3: q3State,
	    q4: q4State,
	    q5: q5State,
	    q6: q6State,
        q7: q7State,
	    q8: q8State,
	    q9: q9State,
	    q10: q10State,
        email: email,	
        }).then((Response) => {
            console.log(Response);
            setAuth(true);
        })
    }


    return (
        <>
        <Header /> 
            <div className="container bg-light rounded mt-5 pt-5 backgroudAudit">
                <h1 className="display-3 text-center texto-m pt-5">Teste AUDIT</h1>
                <p>O AUDIT foi desenvolvido para avaliar indivíduos quanto ao seu padrão do uso de álcool, sendo utilizado como instumento de rastreamento de comportamento de risco de consumo de bebidas alcoólicas. É importante destacar que ele não é um dignóstico completo.</p>
                <p>O principal objetivo é alertar, não apontar possíveis vícios ou doenças.</p>
                <p>É de extrema importância responder as 10 perguntas de acordo com seus hábitos de consumo, para que assim seja retornado um relatório mais apurado possível.</p>
                <p>Para mais informações sobre o Teste AUDIT, clique no botão abaixo:</p>
                <p className="texto-m">
                    <a className="text-dark btn btn-sm btn-light my-1" href="http://www.aberta.senad.gov.br/medias/original/201704/20170424-095653-001.pdf">Clique Aqui!</a>
                </p> 
                <hr className="my-4 bg-white"/>
                    <div className="form-group">
                        <div className="form-check texto-m">
                        <p className="texto-m">1 – Com que frequência você consome bebidas alcoólicas (cerveja, vinho, cachaça, etc.)?</p>
                        <input type="radio" name="q1" value="0" required onChange={(e) =>{setQ1(0);}}/> Nunca. <br />
                        <input type="radio" name="q1" value="1" required onChange={(e) =>{setQ1(1);}}/>Uma vez por mês pelo menos <br />
                        <input type="radio" name="q1" value="2" required onChange={(e) =>{setQ1(2);}}/>Duas a quatro vez por mês. <br />
                        <input type="radio" name="q1" value="3" required onChange={(e) =>{setQ1(3);}}/>Duas a três vezes por semana. <br/>
                        <input type="radio" name="q1" value="4" required onChange={(e) =>{setQ1(4);}}/>Quatro ou mais vezes por semana. <br/><br/>
                    </div>
                <div className="form-check texto-m">
                    <p className="texto-m">2 – Quantas doses, contendo álcool, você consome num dia em que normalmente bebe ?</p>
                    <input type="radio" name="q2" value="0" required onChange={(e) =>{setQ2(0);}}/>1 a 2 doses.<br/>
                    <input type="radio" name="q2" value="1" required onChange={(e) =>{setQ2(1);}}/>3 a 4 doses.<br/>
                    <input type="radio" name="q2" value="2" required onChange={(e) =>{setQ2(2);}}/>5 a 6 doses.<br/>
                    <input type="radio" name="q2" value="3" required onChange={(e) =>{setQ2(3);}}/>7 a 9 doses.<br/>
                    <input type="radio" name="q2" value="4" required onChange={(e) =>{setQ2(4);}}/>10 ou mais doses.<br/><br/>
                </div>
                
                <div className="form-check texto-m">
                    <p className="texto-m">3 – Com que freqüência que você consome 6 ou mais doses de bebida alcoólica em uma única ocasião?</p>
                    <input type="radio" name="q3" value="0" required onChange={(e) =>{setQ3(0);}}/>Nunca. <br/>
                    <input type="radio" name="q3" value="1" required onChange={(e) =>{setQ3(1);}} />Menos que mensalmente. <br/>
                    <input type="radio" name="q3" value="2" required onChange={(e) =>{setQ3(2);}} />Mensalmente. <br/>
                    <input type="radio" name="q3" value="3" required onChange={(e) =>{setQ3(3);}} />Semanalmente. <br/>
                    <input type="radio" name="q3" value="4" required onChange={(e) =>{setQ3(4);}}/>Diariamente ou quase diariamente. <br/><br/>
                </div>
                
                <div className="form-check texto-m">
                    <p className="texto-m">4 – Com que freqüência, durante os últimos doze meses, você percebeu que não conseguia parar de beber uma vez que havia começado? </p>
                    <input type="radio" name="q4" value="0" required  onChange={(e) =>{setQ4(0);}}/>Nunca. <br/>
                    <input type="radio" name="q4" value="1" required  onChange={(e) =>{setQ4(1);}}/>Menos que mensalmente. <br/>
                    <input type="radio" name="q4" value="2" required  onChange={(e) =>{setQ4(2);}}/>Mensalmente. <br/>
                    <input type="radio" name="q4" value="3" required  onChange={(e) =>{setQ4(3);}}/>Semanalmente. <br/>
                    <input type="radio" name="q4" value="4" required  onChange={(e) =>{setQ4(4);}}/>Diariamente ou quase diariamente. <br/><br/>
                </div>
                <div className="form-check texto-m">
                    <p className="texto-m">5 – Com que freqüência, durante os últimos doze meses, você deixou de fazer algo ou atender a um compromisso devido ao uso de bebidas alcoólicas ?</p>
                    <input type="radio" name="q5" value="0" required onChange={(e) =>{setQ5(0);}}/>Nunca. <br/>
                    <input type="radio" name="q5" value="1" required onChange={(e) =>{setQ5(1);}}/>Menos que mensalmente. <br/>
                    <input type="radio" name="q5" value="2" required onChange={(e) =>{setQ5(2);}}/>Mensalmente. <br/>
                    <input type="radio" name="q5" value="3" required onChange={(e) =>{setQ5(3);}}/>Semanalmente. <br/>
                    <input type="radio" name="q5" value="4" required onChange={(e) =>{setQ5(4);}}/>Diariamente. <br/><br/>
                </div>
                
                <div className="form-check texto-m">
                    <p className="texto-m">6 – Com que freqüência, durante os últimos doze meses, você precisou de uma primeira dose pela manhã para sentir-se melhor depois de uma bebedeira?</p>
                    <input type="radio" name="q6" value="0" required onChange={(e) =>{setQ6(0);}}/>Nunca. <br/>
                    <input type="radio" name="q6" value="1" required onChange={(e) =>{setQ6(1);}}/>Menos que mensalmente. <br/>
                    <input type="radio" name="q6" value="2" required onChange={(e) =>{setQ6(2);}}/>Mensalmente. <br/>
                    <input type="radio" name="q6" value="3" required onChange={(e) =>{setQ6(3);}}/>Semanalmente. <br/>
                    <input type="radio" name="q6" value="4" required onChange={(e) =>{setQ6(4);}}/>Diariamente ou quase diariamente. <br/><br/>
                </div>
                
                <div className="form-check texto-m">
                    <p className="texto-m">7 – Com que freqüência você sentiu-se culpado ou com remorso depois de beber?</p>
                    <input type="radio" name="q7" value="0" required onChange={(e) =>{setQ7(0);}}/>Nunca.<br/>
                    <input type="radio" name="q7" value="1" required onChange={(e) =>{setQ7(1);}}/>Menos que mensalmente.<br/>
                    <input type="radio" name="q7" value="2" required onChange={(e) =>{setQ7(2);}}/>Mensalmente.<br/>
                    <input type="radio" name="q7" value="3" required onChange={(e) =>{setQ7(3);}}/>Semanalmente.<br/>
                    <input type="radio" name="q7" value="4" required onChange={(e) =>{setQ7(4);}}/>Diariamente ou quase diariamente.<br/><br/>
                </div>
                <div className="form-check texto-m">
                    <p className="texto-m">8 – Com que freqüência, durante os últimos doze meses, você não conseguiu lembrar-se do que aconteceu na noite anterior porque havia bebido?</p>
                    <input type="radio" name="q8" value="0" required onChange={(e) =>{setQ8(0);}}/>Nunca. <br/>
                    <input type="radio" name="q8" value="1" required onChange={(e) =>{setQ8(1);}}/>Menos que mensalmente. <br/>
                    <input type="radio" name="q8" value="2" required onChange={(e) =>{setQ8(2);}}/>Mensalmente. <br/>
                    <input type="radio" name="q8" value="3" required onChange={(e) =>{setQ8(3);}}/>Semanalmente. <br/>
                    <input type="radio" name="q8" value="4" required onChange={(e) =>{setQ8(4);}}/>Diariamente ou quase diariamente. <br/><br/>
                </div>
                <div className="form-check texto-m">
                    <p className="texto-m">9 – Você ou outra pessoa já se machucou devido a alguma bebedeira sua?</p>
                    <input type="radio" name="q9" value="0" required onChange={(e) =>{setQ9(0);}}/>Nunca. <br/>
                    <input type="radio" name="q9" value="2" required onChange={(e) =>{setQ9(2);}}/>Sim, mas não nos últimos 12 meses. <br/>
                    <input type="radio" name="q9" value="4" required onChange={(e) =>{setQ9(4);}}/>Sim, nos últimos 12 meses. <br/><br/>
                </div>
                
                <div className="form-check texto-m">
                    <p className="texto-m">10 – Algum parente, amigo, médico ou outro profissional de saúde mostrou-se preocupado com seu modo de beber ou sugeriu que você diminuísse a quantidade?</p>
                        <input type="radio" name="q10" value="0" required onChange={(e) =>{setQ10(0);}}/>Nunca. <br/>
                        <input type="radio" name="q10" value="2" required onChange={(e) =>{setQ10(2);}}/>Sim, mas não nos últimos 12 meses. <br/>
                        <input type="radio" name="q10" value="4" required onChange={(e) =>{setQ10(4);}}/>Sim, nos últimos 12 meses. <br/><br/>
                </div> 
            </div>
                <p align="center"> 
                    <button className="btn rounded btn-light m-1 p-1 bg-light text-dark rounded" onClick={registeraudit}>Enviar</button>
                    <input className="btn rounded btn-light m-1 p-1 bg-light text-dark rounded" name="Submit" type="reset" value="Limpar"/>
                </p>
                <p>&nbsp;</p>
            </div>
            {auth && window.location.assign("https://conscire-front.herokuapp.com/resultadoAudit")}
            <Footer />
        </>
    )
}

export default Audit
