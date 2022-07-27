import React from "react";

import './Novidades.css';

import { Link } from "react-router-dom";

import imgCorreios from './Img/correios.png';

export default function Novidades(){
    return(
        <div>
             <section className="estilobackground">
                <div className="col-md-12 fundo" align="center">
                    <Link to='/' className="btn btn-outline-light me-1" role="button">Continuar Comprando</Link>
                    <Link to='Login' className="btn btn-outline-light me-3" role="button">Acesse sua Conta</Link>
                </div>
            </section>
            <section>
                <div className="col-md-12 fundo" style={{backgroundColor: 'black'}}>
                    <form id="form-newsletter" className="mt-8 px-4 text-center" style={{backgroundColor: 'white'}}>
                        <img className="mb-2" src={imgCorreios} alt="imagem dos correios"/>
                            <h3 className="font-bold" style={{color: 'black'}}>RECEBA AS NOVIDADES DA MEGATÊNIS</h3>
                            <p style={{color: 'black'}}>Cadastre-se e seja um dos primeiros a saber de todas as novidades e ofertas.</p>
                            <Link to='Login' target="_blank" ><button className="btn btn-outline-danger me-1" type="button">Inscreva-se</button></Link>
                    </form>
                </div>
            </section>
        </div>
    );
}