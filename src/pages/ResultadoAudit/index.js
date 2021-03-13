// Este @ts-check serve para poder ver parte da documentacao.
//@ts-check
import React from 'react'
import {useState} from 'react'; 
import Axios from 'axios';
import Header from '../../components/Header'
import Footer from '../../components/Footer'

import './styles.css'

function ResultadoAudit() {
    const [result, setResult] = useState([]);
    const [statusResult, setStatusResult] = useState(false);
    // Axios.defaults.withCredentials = true;
   
    window.onload = ()=>{
        const emailsession = localStorage.getItem('email')
        console.log(emailsession)
        Axios.post("https://conscirebackend.herokuapp.com/audit/retorna",{
            email: emailsession,
        }).then((Response)=> {
            console.log(Response.data)
            setResult(Response.data)
            setStatusResult(true)
        })
     }



  
    return (
        <>
            <Header />
            <br /> <br /> <br /> <br /> <br /> <br /> <br />
                <div className="text-center text-dark"> <h4 > Resultado Audit </h4> 
                    <div >          
                        {
                            statusResult &&  <div className="alert alert-success mx-auto mt-4 w-75" role="alert">
                            <p   className="texto-m text-center text-dark py-3">{result}</p>
                        </div>
                        }
                    </div>
                </div>
                


                <p className="text-center text-dark py-3"> *As 'Definições' são apresentadas em:<br />
                    CARNEIRO, A. P. L.; RONZANI, T. M.; AVALLONE, D. M.; FORMIGONI, M. L. O. S. Audit e Audit-C. Informações do teste AUDIT traduzidas para o português. Disponível em: <a href="https://edisciplinas.usp.br/pluginfile.php/4170599/mod_resource/content/1/audit.pdf" rel="noreferrer" target="_blank">https://edisciplinas.usp.br/pluginfile.php/4170599/mod_resource/content/1/audit.pdf</a>. Acesso em: 2 dez. 2020.
                    <br />
                    *As 'Intervenções' são apresentadas em:<br />
                    BABOR, T.F.; HIGGINS-BIDDLE, J. C.; SAUNDERS, J. B.; MONTEIRO, M. G. The Alcohol Use Disorders Identification Test Guidelines for Use in Primary Care. 2001. <a href="https://apps.who.int/iris/bitstream/handle/10665/67205/WHO_MSD_MSB_01.6a.pdf?sequence=1" rel="noreferrer" target="_blank">https://apps.who.int/iris/bitstream/handle/10665/67205/WHO_MSD_MSB_01.6a.pdf?sequence=1</a>. Tradução: REMELHE, J.; TOPA, J. Intervenções breves para o consumo de risco e nocivo de bebidas alcoólicas: guia para utilização em Cuidados Primários de Saúde. Informações sobre as 4 Zonas de Risco. Disponível em: <a href="https://apps.who.int/iris/bitstream/handle/10665/67210/WHO_MSD_MSB_01.6b_por.pdf?sequence=2&isAllowed=y" rel="noreferrer" target="_blank">https://apps.who.int/iris/bitstream/handle/10665/67210/WHO_MSD_MSB_01.6b_por.pdf?sequence=2&isAllowed=y</a>. Acesso em: 2 dez. 2020.  
                </p>
            <Footer />
        </>
    )
}

export default ResultadoAudit;
