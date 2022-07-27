import React from 'react';

import { Footer, Navigation, Legenda, ResumoCarrinho } from '../Components';



export function Carrinho() {
    return (
        <React.Fragment>
              <Navigation/>   
                  <div className='text-center'>
                      <Legenda title ="Revise seu Carrinho" />
                      <Legenda title ="Quantidade de Itens: 2" />
                      <ResumoCarrinho/>
                  </div>          
              <Footer/>   
        </React.Fragment>
    );
}
