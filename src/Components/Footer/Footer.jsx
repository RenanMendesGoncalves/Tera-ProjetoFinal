import React from "react";

import 'bootstrap/dist/css/bootstrap.min.css';

import './Footer.css';


import imgBoleto from './Img/boleto.png';
import imgVisa from './Img/visa.png';
import imgMaster from './Img/master.png';

export default function Footer(){
  return(
    <div>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossOrigin="anonymous" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.1/font/bootstrap-icons.css" />
        <footer>
            <section>
                <div className="row pb-20 text-danger text-center">
                    <div className="col-3 col-md-6 col-lg-4 mb-10 mb-lg-0">
                        <h6 className="mb-8">Informações</h6>
                        <ul className="list-unstyled mb-0">
                            <li className="mb-6"><a className="link-dark text-decoration-none" style={{color: 'white'}} href="/">Nossa Loja</a></li>
                            <li className="mb-6"><a className="link-dark text-decoration-none" style={{color: 'white'}} href="/">Missão</a></li>
                            <li className="mb-6"><a className="link-dark text-decoration-none" style={{color: 'white'}} href="/">Novidades</a></li>
                            <li className="mb-6"><a className="link-dark text-decoration-none" style={{color: 'white'}} href="/">Sustentabilidade</a></li>
                            <li className="mb-6"><a className="link-dark text-decoration-none" style={{color: 'white'}} href="/">Relacionamento
                                Cliente</a></li>
                            <li className="mb-6"><a className="link-dark text-decoration-none" style={{color: 'white'}} href="/">Cartão Presente</a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-6 col-md-6 col-lg-4 mb-10 mb-lg-0">
                        <h6 className="mb-8">Serviços ao Cliente</h6>
                            <ul className="list-unstyled mb-0">
                                <li className="mb-6"><a className="link-dark text-decoration-none" style={{color: 'white'}} href="/">Acompanhar
                                    Pedido</a></li>
                                <li className="mb-6"><a className="link-dark text-decoration-none" style={{color: 'white'}} href="/">Regras
                                    Pagamentos</a></li>
                                <li className="mb-6"><a className="link-dark text-decoration-none" style={{color: 'white'}} href="/">Trocas e
                                    Devoluções</a></li>
                                <li className="mb-6"><a className="link-dark text-decoration-none" style={{color: 'white'}} href="/">Cancelar
                                    Pedidos</a></li>
                                <li className="mb-6"><a className="link-dark text-decoration-none" style={{color: 'white'}} href="/">Entregas</a></li>
                                <li className="mb-6"><a className="link-dark text-decoration-none" style={{color: 'white'}} href="/">FAQs</a></li>
                            </ul>
                    </div>
                    <div className="col-3 col-md-6 col-lg-4">
                        <h6 className="mb-8">Contato</h6>
                            <ul className="list-unstyled">
                                <li className="mb-6">
                                <p className="mb-2">Telefone</p>
                                <a className="link-info text-decoration-none" href="/">+55 9 9977-7855</a>
                                </li>
                                <li className="mb-6">
                                <p className="mb-2">Email</p>
                                <a className="link-info text-decoration-none" href="/">megatenis.com.br</a>
                                </li>
                                <li>
                                <p className="mb-2">Live Chat</p>
                                <a className="link-info text-decoration-none" href="/">MEGATÊNIS</a>
                                </li>
                            </ul>
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col-3 col-md-6 col-lg-4" style={{color: 'white'}}>
                                <p>Formas de Pagamento:</p>
                            </div>
                            <div className="col-6 col-md-6 col-lg-4" style={{color: 'white'}}>
                                <img className="me-4 mb-2 img-fluid" style={{width: '12%', height: '50%'}} src={imgVisa} alt="imagem bandeira visa" />
                                <img className="me-4 mb-2 img-fluid" style={{width: '12%', height: '50%'}} src={imgMaster} alt="imagem bandeira master" />
                                <img className="me-2 mb-2 img-fluid" style={{width: '12%', height: '50%'}} src={imgBoleto} alt="imagem boleto bancario" />
                            </div>
                            <div className="col-3 col-md-6 col-lg-4" style={{color: 'white'}}>
                                <p>© Copyright 2022 MegaTênis</p>
                            </div>
                        </div>
                    </div>
                </div>
        </section>
    </footer>
  </div>
);
}