import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Link } from "react-router-dom";

import './CatalogoProduto.css';


export default class CatalogoProduto extends React.Component {

        render(){
         return(            
        <div>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossOrigin="anonymous" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.1/font/bootstrap-icons.css" />
        <section className='estilobackground'>
            <div className="container">
                <div className="row">
                    <div className="container span7 text-center col-md-4 col-md-offset-3" style={{margin: '0 auto', float: 'none', border: '3px solid red'}}>
                        <img src={this.props.imgTenis18} height={270} className="img-fluid" alt="tênis" />
                            {this.props.estilo}
                            <p>{this.props.nomeTenis1}</p> 
                            <p>{this.props.valor1}</p>
                            <Link to='ItemProduto'>
                                <button type="button" className="btn btn-outline-danger">COMPRAR</button></Link>
                    </div>
                    <div className="container span7 text-center col-md-4 col-md-offset-3" style={{margin: '0 auto', float: 'none', border: '3px solid red'}}>
                        <img src={this.props.imgTenis13} height={270} className="img-fluid" alt="tênis" />
                            {this.props.estilo}
                            <p>{this.props.nomeTenis2}</p> 
                            <p>{this.props.valor2}</p>
                            <Link to='ItemProduto'>
                                <button type="button" className="btn btn-outline-danger">COMPRAR</button></Link>
                    </div>
                    <div className="container span7 text-center col-md-4 col-md-offset-3" style={{margin: '0 auto', float: 'none', border: '3px solid red'}}>
                        <img
                            src={this.props.imgTenis19} height={270} className="img-fluid" alt="tênis">
                         </img>
                            {this.props.estilo}
                            <p>{this.props.nomeTenis3}</p> 
                            <p>{this.props.valor3}</p>
                            <Link to='ItemProduto'>
                                <button type="button" className="btn btn-outline-danger">COMPRAR</button></Link>
                    </div>
                </div>
            </div>
        </section>
    </div>
         );
  }
}