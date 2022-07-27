import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

import Pagination from 'react-bootstrap/Pagination'
import './PaginationMegaTenis.css';

export default function PaginationMegaTenis(){
    return(
        <div className="csspag">
               <div className="container">
                    <div className="row">
                        <div className="csspag">
                            <h6 style={{marginLeft: '39%'}}>Ainda não encontrou o que procura?</h6>
                        </div>
                        <div className="csspagina">
                                <Pagination>
                                    <Pagination.First />
                                    <Pagination.Prev />
                                    <Pagination.Item>{1}</Pagination.Item>
                                    <Pagination.Ellipsis />

                                    <Pagination.Item>{10}</Pagination.Item>
                                    <Pagination.Item>{11}</Pagination.Item>
                                    <Pagination.Item active>{12}</Pagination.Item>
                                    <Pagination.Item>{13}</Pagination.Item>
                                    <Pagination.Item disabled>{14}</Pagination.Item>

                                    <Pagination.Ellipsis />
                                    <Pagination.Item>{20}</Pagination.Item>
                                    <Pagination.Next />
                                    <Pagination.Last />
                                </Pagination>
                            </div>
                        </div>
                    </div>
                </div>
         );
}