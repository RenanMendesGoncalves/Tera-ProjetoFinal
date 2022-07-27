import React from "react";

import './FormClient.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Link } from "react-router-dom";

import imgCadastre from './Img/cadastre-se1.png';


export default function FormClient(){
    return(
        <div>
          <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossOrigin="anonymous" />
          <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.1/font/bootstrap-icons.css" />

            <section className="py-20 bg-light overflow-hidden" style={{margin: '55ex', marginTop: '5ex'}}>
                <div className="position-relative container" style={{backgroundColor: 'rgb(114, 192, 192)'}}>
                  <div className="position-relative mw-4xl mx-auto">
                      <div className="position-absolute top-50 start-0 end-0 translate-middle-y bg-info-light ms-n6 me-n6" />
                        <div className="position-relative py-16 pt-md-32 pb-md-20 px-4 px-sm-8 bg-white">
                           <div className="mw-lg mx-auto text-justify">
                              <Link to='/' className="d-inline-block h6 mb-14">
                                <img className="img-fluid" src={imgCadastre} alt="imagem volta para home" />
                              </Link>
                              <h2 className="mb-8" style={{textAlign: 'center', textTransform: 'uppercase'}}>Torne-se um membro da MegaTênis</h2>
                                  <p className="mb-10 fw-bold">Crie seu perfil de membro e consiga acesso antecipado às melhores oportunidades da loja.</p>
                              <div id="like_button_container" />
                              <br />
                                <form action>
                                    <input className="form-control form-control-lg mb-4" type="text" placeholder="john@example.com" />
                                    <input className="form-control form-control-lg mb-4" type="text" placeholder="Nome" />
                                    <input className="form-control form-control-lg mb-4" type="text" placeholder="Sobrenome" />
                                    <input className="form-control form-control-lg mb-4" type="date" placeholder="dd/mm/aaaa" />
                                    <input className="form-control form-control-lg mb-4" type="password" placeholder="Senha" />
                                    <input className="form-control form-control-lg mb-10" type="password" placeholder="Confirme a Senha" />
                                       <div className="form-check" htmlFor>
                                          <input className="form-check-input" type="checkbox" />
                                            <label className="form-check-label small p-2" style={{fontSize: 'small'}}>Inscreva-se para receber e-mails de novidades 
                                                sobre produtos, ofertas e seus benefícios para membros.</label>
                                       </div>
                                       <button className="col-lg-6 btn btn-dark p-2" style={{marginLeft: '8em', color: 'rgba(114,192,192,255)'}}>Junte-se a Nós</button>
                                       <div className="mw-lg mx-auto m-6">
                                          <p className="col-5 mb-10 fw-bold m-3">Já é um usuário?</p>
                                              <Link to='Login' className="col-5 mb-10 fw-bold m-3"> Faça seu login 
                                              </Link>
                                       </div>
                                </form>
                            </div>
                        </div>
                     </div>
                 </div>
             </section>
        </div>      
    );

}