import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

import { Link } from "react-router-dom";

import imgTenis13 from './Img/tenis13.jpeg';
import imgCasual2 from './Img/casual2.jpeg';


import './ResumoCarrinho.css';

export default function ResumoCarrinho(){
    return(
        <div>
          <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossOrigin="anonymous" />
          <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.1/font/bootstrap-icons.css" />
          <link rel="stylesheet" href="Style/style.css" />
          <div className="col-6">
            <div className="row align-items-center p-4 border mb-2">
              <div className="col-3 col-md-3">
                <div className="cart-produt-image">
                  <img className="img-fluid" src={imgTenis13} alt="imagem tênis"/>
                </div>
              </div>
              <div className="text-center2 col-6 col-md-6 d-flex flex-column">
                    <strong>Nano X: O melhor para seu Treino!</strong>
                    <span>Tamanho: 38</span>
                    <span>Quantidade: 1</span>
              </div>
              <div className=" text-center2 col-3 col-md-2 text-end">
                  <span className="fs-4 fw-bold">R$634,00</span>
              </div>
              <div className="col-3 col-md-3">
                <div className="cart-produt-image">
                    <img className="img-fluid" src={imgCasual2} alt="imagem tênis" />
                </div>
              </div>
              <div className=" text-center2 col-6 col-md-6 d-flex flex-column">
                  <strong>Casual: Venha ter o melhor estilo!</strong>
                  <span>Tamanho: 36</span>
                  <span>Quantidade 1</span>
              </div>
              <div className="text-center2 col-3 col-md-2 text-end">
                  <span className="fs-4 fw-bold">R$349,00</span>
              </div>
              <div className="css-total col-8 text-md-end">
                  <h3 style={{color: 'rgb(17, 107, 226)'}}>Total :</h3>
              </div>
              <div className="col-4">
                  <span className="fs-4 fw-bold" style={{color: 'rgb(17, 107, 226)'}}>R$983,00</span>
              </div>
            </div>
          </div>
          <div className="col-6">
          <div className=" text-center2 row align-items-center p-4 border mb-2">
            <h1> Resumo da Compra</h1>
              <div className="col-6 col-md-6">
                  <strong>Cupom de Desconto:</strong>
                  <input type="text" className="form-control" id="cp-desconto" placeholder="Insira o cupom" />
                    <button type="submit" style={{lineHeight: '1rem'}} className="btn btn-outline-danger">Validar</button>
              </div>
              <div className="col-6 col-md-6">
                  <strong>Frete:</strong>
                  <input type="text" className="form-control" id="frete-desconto" placeholder="Insira o CEP" />
                    <button type="submit" className="btn btn-outline-danger">Calcular Frete</button>
              </div>
              <div>
                  <h3 className="text-center">Finalizar Compra</h3>
              </div>
              <div className="text-center3 col-6 col-md-6" style={{marginTop: '5%'}}>
                  <strong>Esqueceu de Algo?</strong>
                  <Link to="/">
                    <button type="button" style={{lineHeight: '1rem', marginTop: '18%'}} text="right" className="btn btn-outline-danger">Continue Comprando</button>
                  </Link>
              </div>
            </div>
          </div>
        </div>
         );
}