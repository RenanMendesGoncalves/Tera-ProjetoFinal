import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

import { Link } from "react-router-dom";

import './DnaProduto.css';

import imgFacebook from './Img/facebook.png';
import imgInstagram from './Img/instagram.png';
import imgZap from './Img/zap.png';
import imgTenis1 from './Img/tenis3.png';
import imgTenis2 from './Img/tenis3.png';
import imgTenis3 from './Img/tenis3.png';
import imgTenis4 from './Img/tenis4.png';
import imgTenis5 from './Img/tenis5.png';
import imgTenis6 from './Img/tenis6.png';




export default function DnaProduto() {
        return(
          <div>
            
          <div className='estilobackground'>
            <section className="py-20 overflow-hidden">
              <div className="container">
                <div className="row mb-24">
                  <div className="col-6 col-md-6 mb-8 mb-md-0">
                    <div className="position-relative mb-10" style={{height: '400px'}}>
                      <div id="myCarrousel" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-indicators">
                            <button type="button" data-bs-target="#myCarrousel" data-bs-slide-to={0} className="active" aria-current="true" aria-label="Slide 1" />
                            <button type="button" data-bs-target="#myCarrousel" data-bs-slide-to={1} aria-label="Slide 2" />
                            <button type="button" data-bs-target="#myCarrousel" data-bs-slide-to={2} aria-label="Slide 3" />
                            <button type="button" data-bs-target="#myCarrousel" data-bs-slide-to={3} aria-label="Slide 2" />
                            <button type="button" data-bs-target="#myCarrousel" data-bs-slide-to={4} aria-label="Slide 3" />
                            <button type="button" data-bs-target="#myCarrousel" data-bs-slide-to={5} aria-label="Slide 2" />
                        </div>
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img src={imgTenis1} height={400} className="d-block w-100" alt="imagem tênis crossfit" />
                            </div>
                            <div className="carousel-item">
                                <img src={imgTenis2} height={400} className="d-block w-100" alt="imagem tênis de corrida" />
                            </div>
                            <div className="carousel-item">
                                <img src={imgTenis3} height={400} className="d-block w-100" alt="imagem tênis casual" />
                            </div>
                            <div className="carousel-item">
                                <img src={imgTenis4} height={400} className="d-block w-100" alt="imagem tênis casual" />
                            </div>
                            <div className="carousel-item">
                                <img src={imgTenis5} height={400} className="d-block w-100" alt="imagem tênis casual" />
                            </div>
                            <div className="carousel-item">
                                <img src={imgTenis6} height={400} className="d-block w-100" alt="imagem tênis casual" />
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#myCarrousel" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true" />
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#myCarrousel" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true" />
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                    </div>
                    <div className="row">
                      <div className="col-3 col-sm-3 p-2">
                        <a className="d-block border border-info" href="/">
                          <img className="w-100 img-fluid" style={{height: '128px'}} src={imgTenis3} alt="imagem de tênis" />
                        </a>
                      </div>
                      <div className="col-3 col-sm-3 p-2">
                        <a className="d-block" href="/">
                          <img className="w-100 img-fluid" style={{height: '128px'}} src={imgTenis4} alt="imagem de tênis" />
                        </a>
                      </div>
                      <div className="col-3 col-sm-3 p-2">
                        <a className="d-block" href="/">
                          <img className="w-100 img-fluid" style={{height: '128px'}} src={imgTenis5} alt="imagem de tênis" />
                        </a>
                      </div>
                      <div className="col-3 col-sm-3 p-2">
                        <a className="d-block" href="/">
                          <img className="w-100 img-fluid" style={{height: '128px'}} src={imgTenis6} alt="imagem de tênis" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-6 col-md-6">
                    <div className="ps-lg-20">
                      <div className="mb-10 pb-10 border-bottom">
                        <span className="text-secondary">Treino e Academia</span>
                        <h1 className="mt-2 mb-6 mw-xl">Tênis Nike City Rep TR Masculino</h1>
                        <div className="mb-8">
                          <button className="btn p-0">
                            <img className="img-fluid" src="yofte-assets/elements/star-gold.svg" alt="" />
                          </button>
                          <button className="btn p-0">
                            <img className="img-fluid" src="yofte-assets/elements/star-gold.svg" alt="" />
                          </button>
                          <button className="btn p-0">
                            <img className="img-fluid" src="yofte-assets/elements/star-gold.svg" alt="" />
                          </button>
                          <button className="btn p-0">
                            <img className="img-fluid" src="yofte-assets/elements/star-gold.svg" alt="" />
                          </button>
                          <button className="btn p-0">
                            <img className="img-fluid" src="yofte-assets/elements/star-gray.svg" alt="" />
                          </button>
                        </div>
                        <p className="d-inline-block mb-8 h5 text-info">
                          <span className="fw-normal text-secondary text-decoration-line-through" style={{fontSize: '16px'}}> De
                            R$513.69</span>
                          <span style={{color: '#e5212b'}}>Por R$499.99</span>
                        </p>
                        <p className="mw-md text-secondary">O Nike City Rep TR é um tênis versátil com durabilidade e flexibilidade
                          para o seu estilo de vida urbana. </p>
                      </div>
                      <div className="d-flex mb-12">
                        <div className="me-6">
                          <span className="d-block mb-2 fw-bold text-secondary tetx-uppercase">QTD</span>
                          <div className="d-inline-flex align-items-center px-4 text-secondary border-0">
                            <button className="btn px-0 py-4">
                            </button>
                            <input className="form-control m-0 px-2 py-4 text-center text-md-end border-0" style={{width: '68px', backgroundColor: 'white', height: '22px'}} type="number" placeholder={0} />
                            <button className="btn px-0 py-4">
                            </button>
                          </div>
                        </div>
                        <div>
                          <span className="d-block mb-2 fw-bold text-secondary text-uppercase">tamanho</span>
                          <select className="form-select border ps-6 pe-10 py-4 fw-bold text-secondary" style={{width: '68px', height: '22px'}} name id>
                            <option value={1}>34</option>
                            <option value={2}>35</option>
                            <option value={3}>36</option>
                            <option value={1}>37</option>
                            <option value={2}>38</option>
                            <option value={3}>39</option>
                          </select>
                        </div>
                      </div>
                      <div className="row mb-14">
                        <div className="col-6 col-xl-8 mb-4 mb-xl-0"><Link to='Carrinho' className="btn w-100 btn-outline-danger">Adicione ao Carrinho</Link></div>
                        <div className="col-12 col-xl-8">
                          <a className="h-100 ms-auto ms-sm-0 flex-shrink-0 d-inline-flex me-4 align-items-center justify-content-center rounded-2 border" href="/" style={{width: '64px', minHeight: '52px'}}>
                            <svg width={27} height={27} viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M13.4993 26.2061L4.70067 16.9253C3.9281 16.1443 3.41815 15.1374 3.24307 14.0471C3.06798 12.9568 3.23664 11.8385 3.72514 10.8505V10.8505C4.09415 10.1046 4.63318 9.45803 5.29779 8.96406C5.96241 8.47008 6.73359 8.14284 7.54782 8.00931C8.36204 7.87578 9.19599 7.93978 9.98095 8.19603C10.7659 8.45228 11.4794 8.89345 12.0627 9.48319L13.4993 10.9358L14.9359 9.48319C15.5192 8.89345 16.2327 8.45228 17.0177 8.19603C17.8026 7.93978 18.6366 7.87578 19.4508 8.00931C20.265 8.14284 21.0362 8.47008 21.7008 8.96406C22.3654 9.45803 22.9045 10.1046 23.2735 10.8505V10.8505C23.762 11.8385 23.9306 12.9568 23.7556 14.0471C23.5805 15.1374 23.0705 16.1443 22.298 16.9253L13.4993 26.2061Z" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                          </a>
                          <a className="flex-shrink-0 h-100 d-inline-flex align-items-center justify-content-center rounded-2 border" href="/" style={{width: '64px', minHeight: '52px'}}>
                            <svg width={24} height={23} viewBox="0 0 24 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M2.01328 18.9877C2.05682 16.7902 2.71436 12.9275 6.3326 9.87096L6.33277 9.87116L6.33979 9.86454L6.3398 9.86452C6.34682 9.85809 8.64847 7.74859 13.4997 7.74859C13.6702 7.74859 13.8443 7.75111 14.0206 7.757L14.0213 7.75702L14.453 7.76978L14.6331 7.77511V7.59486V3.49068L21.5728 10.5736L14.6331 17.6562V13.6558V13.5186L14.4998 13.4859L14.1812 13.4077C14.1807 13.4075 14.1801 13.4074 14.1792 13.4072M2.01328 18.9877L14.1792 13.4072M2.01328 18.9877C7.16281 11.8391 14.012 13.3662 14.1792 13.4072M2.01328 18.9877L14.1792 13.4072M23.125 10.6961L23.245 10.5736L23.125 10.4512L13.7449 0.877527L13.4449 0.571334V1V6.5473C8.22585 6.54663 5.70981 8.81683 5.54923 8.96832C-0.317573 13.927 0.931279 20.8573 0.946581 20.938L0.946636 20.9383L1.15618 22.0329L1.24364 22.4898L1.47901 22.0885L2.041 21.1305L2.04103 21.1305C4.18034 17.4815 6.71668 15.7763 8.8873 15.0074C10.9246 14.2858 12.6517 14.385 13.4449 14.4935V20.1473V20.576L13.7449 20.2698L23.125 10.6961Z" fill="black" stroke="black" strokeWidth="0.35" />
                            </svg>
                          </a>
                        </div>
                      </div>
                      <div className="d-flex align-items-center">
                        <div className="row">
                          <div className="col-8 col-md-offset-3 p-2">
                            <p className="me-8 mb-lg-0 text-secondary fw-bold text-uppercase">Compartilhe com Seus Amigos:</p>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-lg-4 col-md-offset-3 p-2">
                            <a className="d-block" href="https://pt-br.facebook.com/login.php">
                              <img className="img-fluid" src={imgFacebook} width="60px" alt="imagem facebook" />
                            </a>
                          </div>
                          <div className="col-lg-4 col-md-offset-3 p-2">
                            <a className="d-block" href="https://www.instagram.com/accounts/login/">
                              <img className="img-fluid" src={imgInstagram} width="60px" alt="imagem instagram" />
                            </a>
                          </div>
                          <div className="col-lg-4 col-md-offset-3 p-2">
                            <a className="d-block" href="https://www.whatsapp.com/login">
                              <img className="img-fluid" src={imgZap} width="60px" alt="imagem whatzap" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <section>
                  <div className="row">
                    <h3 className="mb-8" style={{color: 'black'}}>Saiba mais informações:</h3>
                    <div className="border col-lg-12" style={{height: '100px', backgroundColor: 'aliceblue'}}>
                      <details>
                        <summary style={{color: '#e5212b'}}>DNA do Produto</summary>
                        <p>O Nike City Rep TR é um tênis versátil com durabilidade e flexibilidade para o seu estilo de vida
                          urbana. O piso de borracha proporciona maior aderência em várias superfícies, enquanto o amortecimento
                          de espuma deixa seu pé confortável, desde treinos ao ar livre até o resto do dia.</p>
                      </details>
                    </div>
                    <div className="border col-lg-12" style={{height: '100px', backgroundColor: 'aliceblue'}}>
                      <details>
                        <summary style={{color: '#e5212b'}}>Resistência</summary>
                        <p>A parte de cima durável é reforçada com sobreposições para resistir às exigências dos treinos ao ar
                          livre. A espuma amortece seu pé com conforto que dura desde um treino rápido até o dia todo.</p>
                      </details>
                    </div>
                    <div className="border col-lg-12" style={{height: '100px', backgroundColor: 'aliceblue'}}>
                      <details>
                        <summary style={{color: '#e5212b'}}>Conforto</summary>
                        <p>O piso de borracha proporciona tração em várias superfícies. Os arcos nas laterais garantem
                          durabilidade onde é necessário para as placas e movimentos laterais.</p>
                      </details>
                    </div>
                  </div>
                </section>
              </div>
            </section>
            </div>
          </div>
        );
    }   