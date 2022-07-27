import React from 'react';

import { Footer, Navigation, Legenda, Novidades, DnaProduto } from '../Components';



export function ItemProduto() {
    return (
        <React.Fragment>
              <Navigation/>   
                  <div className='text-center'>
                      <Legenda title ="Você está quase lá" />
                  </div>
              <DnaProduto/>        
              <Novidades/>          
              <Footer/>   
        </React.Fragment>
    );
}
