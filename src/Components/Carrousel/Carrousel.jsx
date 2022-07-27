import React from "react";

import 'bootstrap/dist/css/bootstrap.min.css';

import { Carousel } from 'react-bootstrap';

import imgCrossfit from './Img/crossfit.jpeg';
import imgCorrida from './Img/corrida.jpeg';
import imgCasual from './Img/casual.jpeg';

export default function Carrousel(){
  return(
        <div>
          <div className='container-fluid' >
                <Carousel>
                  <Carousel.Item>
                    <img
                      className="d-block w-100" height="400"
                      src={imgCrossfit}
                      alt="imagem tênis crossfit"
                    />
                  <Carousel.Caption>
                    <h3>CROSSFIT</h3>
                      <p style={{color:"black", fontSize:'32px'}}> Onde todos os atletas se encontram.</p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100" height="400"
                    src={imgCorrida}
                    alt="imagem tênis corrida"
                  />
                  <Carousel.Caption>
                    <h3>CORRIDA</h3>
                    <p style={{color:"black", fontSize:'32px'}}>O esporte é o amor.</p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100" height="400"
                    src={imgCasual}
                    alt="imagem tênis casual"
                  />
                  <Carousel.Caption>
                    <h3>CASUAL</h3>
                    <p style={{color:"black", fontSize:'32px'}}>A sua escolha perfeita.</p>
                  </Carousel.Caption>
                </Carousel.Item>
                </Carousel>
              </div>
            </div>
  );
}
