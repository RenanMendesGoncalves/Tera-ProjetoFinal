import React from "react";

import './Navigation.css';

import { Link } from "react-router-dom";

import imgLogo from './Img/logo da loja.png';

export default function Navigation(){
    return(
        <div>
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossOrigin="anonymous" />
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.1/font/bootstrap-icons.css" />
            <nav className="navbar py-0 navbar-expand-lg bg-light border-bottom">
            <div className="container-fluid">
                <a className="navbar-brand h6 flex-shrink-0 py-8" href="/">
                    <img className="img-fluid" src={imgLogo} alt="logo da loja" width={120} />
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <i className="bi bi-list" />
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <div className="d-lg-flex align-items-lg-center py-3 ps-2 pe-2 bg-dark rounded-3">
                        <svg className="flex-shrink-0 me-2" style={{width: '24px', height: '24px'}} width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M17.5 17.1309L12.5042 11.9551" stroke="red" strokeMiterlimit={10} strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M7.27524 13.8672C10.8789 13.8672 13.8002 10.945 13.8002 7.34033C13.8002 3.73565 10.8789 0.813477 7.27524 0.813477C3.67159 0.813477 0.750244 3.73565 0.750244 7.34033C0.750244 10.945 3.67159 13.8672 7.27524 13.8672Z" stroke="red" strokeMiterlimit={10} strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <input className="form-control bg-white border-0 me-lg-3" type="text" placeholder="O que você procura?" />
                            <select className="form-select bg-white ps-6 pe-6 border-0 border-start" style={{color: '#e5212b'}} name id data-removed="true">
                                <option>Todos&nbsp;Estilos</option>
                                <option>Corrida</option>
                                <option>Crossfit</option>
                                <option>Casual</option>
                            </select>
                    </div>
                    <ul className="navbar-nav me-12 mb-2 py-10 px-xxl-12">
                        <li className="nav-item"><a className="nav-link" style={{color: '#e5212b', fontSize: 'xx-large'}} aria-current="page" href="/">Lançamentos</a></li>
                        <li className="nav-item"><Link to='Pagina Dinamica'className="nav-link" style={{color: '#e5212b', fontSize: 'xx-large'}} aria-current="page" >Ofertas</Link></li>
                    </ul>
                    <section>
                    <div className="position">
                        <Link to='ModalCarrinho' style={{color: 'black'}} data-bs-toggle="modal" data-bs-target="#exampleModal">
                                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="45" fill="currentColor" class="bi bi-cart4" viewBox="0 0 16 16">
                                        <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l.5 2H5V5H3.14zM6 5v2h2V5H6zm3 0v2h2V5H9zm3 0v2h1.36l.5-2H12zm1.11 3H12v2h.61l.5-2zM11 8H9v2h2V8zM8 8H6v2h2V8zM5 8H3.89l.5 2H5V8zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"/>
                                </svg>
                            </Link>
                    
                         <Link to='Login' style={{color: 'black'}} data-bs-toggle="modal" data-bs-target="#exampleModal"> 
                                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="45" fill="currentColor" class="bi bi-person-check-fill" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M15.854 5.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 0 1 .708-.708L12.5 7.793l2.646-2.647a.5.5 0 0 1 .708 0z"/>
                                    <path d="M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                                </svg>
                            </Link> 
                    </div>
                        <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog">
                            <div className="modal-content">
                            <div className="modal-header" style={{backgroundColor: 'black'}}>
                                <h5 className="modal-title" style={{color: 'white', textTransform: 'uppercase'}} id="exampleModalLabel">Carrinho</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                            </div>
                            <div className="modal-body">
                                <div className="col-lg-12" style={{textAlign: 'left'}}>
                                <h2>Seu carrinho está vazio</h2>
                                <p style={{textAlign: 'center'}}>Navegue pelas categorias da loja ou faça uma busca pelo seu produto</p>
                                <div className="col-lg-12 p-0" style={{textAlign: 'right'}}>
                                    <Link to='Login'>
                                    <button id="continuar-comprando" className="btn btn-secondary" data-bs-dismiss="modal">Continuar Comprando</button>
                                    </Link> 
                                </div>
                                </div>
                            </div>
                            <div className="modal-footer p-0">
                                <button id="estiloBotaoFechar" type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            </div>
                            </div>
                        </div>
                        </div>
                </section>
                    <div>
                        <Link to='Login' className="btn btn-outline-dark me-3" id="pos_registre" role="button">Sign In / Create Account</Link>
                    </div>
                </div>
            </div>
          </nav>    
      </div>
      
    );
}