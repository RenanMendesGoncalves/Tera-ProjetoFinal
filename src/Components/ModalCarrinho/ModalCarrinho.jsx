import React,{useState} from 'react';
import {Modal, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Link } from "react-router-dom";

export default function ModalCarrinho(){
    
    const [visible, setVisible] = useState(false);
        
          const btnClose = () => setVisible(false);
          const btnShow = () => setVisible(true);
    
    return(
      <>          
        <Button variant="primary" onClick={btnShow}>
          Click Me To See Modal
        </Button>  
      
      <Modal show={visible} onHide={btnClose}>
            <Modal.Header style={{background:"black"}} onClick={btnClose} > 
                <Modal.Title >
                  <div className="modal-header">
                    <h5 className="modal-title" style={{color: 'white', textTransform: 'uppercase'}} id="exampleModalLabel">Carrinho</h5>              
                  </div>
                </Modal.Title>
              </Modal.Header>
              <Modal.Body>
                  <h2>Seu Carrinho está vazio!</h2> 
                    <p style={{textAlign: 'center'}}>Navegue pelas categorias da loja ou faça uma busca pelo seu produto</p>
                        <div className="col-lg-12 p-0" style={{textAlign: 'right'}}>
                            <Link to="/">
                                <button id="continuar-comprando" className="btn btn-secondary" data-bs-dismiss="modal">Continuar Comprando</button>
                            </Link> 
                        </div>
              </Modal.Body>
              <Modal.Footer>
                <Link to="/">
                  <Button onClick={btnClose}  id="estiloBotaoFechar" type="button" className="btn btn-secondary" data-bs-dismiss="modal">
                      Close
                  </Button>
                </Link>
              </Modal.Footer>
        </Modal>
      </>
    );
  }