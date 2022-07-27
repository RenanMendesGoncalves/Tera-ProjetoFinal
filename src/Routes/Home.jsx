import React from 'react';

import { Carrousel, CatalogoProduto, Footer, Legenda, Navigation, PaginationMegaTenis} from '../Components';
import imgTenis18 from '../Components/CatalogoProduto/Img/tenis18.png';
import imgTenis13 from '../Components/CatalogoProduto/Img/tenis13.jpeg';
import imgTenis19 from '../Components/CatalogoProduto/Img/tenis19.png';
import imgTeniscross1 from '../Components/CatalogoProduto/Img/teniscross1.jpeg';
import imgTeniscross2 from '../Components/CatalogoProduto/Img/teniscross2.jpeg';
import imgTeniscross3 from '../Components/CatalogoProduto/Img/teniscross3.jpeg';
import imgCasual1 from '../Components/CatalogoProduto/Img/casual1.jpeg';
import imgCasual2 from '../Components/CatalogoProduto/Img/casual2.jpeg';
import imgCasual3 from '../Components/CatalogoProduto/Img/casual3.jpeg';


export function Home() {
      return (
          <React.Fragment>
              <Navigation/>   
                  <div className='text-center'>
                      <Legenda title ="Tênis para todos os estilos" />
                  </div>
              <Carrousel/>
                  <div className='text-center'>
                      <Legenda title="Encontre o Tênis perfeito para você" />
                  </div>
              <CatalogoProduto estilo="corrida" 
                               nomeTenis1="TÊNIS ADIDAS ULTRABOOST 5.0 DNA" valor1={'R$899.90'} imgTenis18={imgTenis18} 
                               nomeTenis2="TÊNIS NIKE AIR ZOOM TEMPO" valor2={'R$1199.00'} imgTenis13={imgTenis13}
                               nomeTenis3="TÊNIS FILA RACER CARBON" valor3={'R$759.00'} imgTenis19={imgTenis19} />
              <CatalogoProduto estilo="crossfit" 
                               nomeTenis1="TÊNIS NIKE METCON 7" valor1={'R$749.99'} imgTenis18={imgTeniscross1}
                               nomeTenis2="TÊNIS REEBOK NANO X1" valor2={'R$699.00'} imgTenis13={imgTeniscross2}
                               nomeTenis3="TÊNIS EVERLAST MONSTER" valor3={'R$339.90'} imgTenis19={imgTeniscross3} />
              <CatalogoProduto estilo="casual" 
                               nomeTenis1="TÊNIS NIKE SB" valor1={'R$549.99'} imgTenis18={imgCasual1}
                               nomeTenis2="TÊNIS REEBOK ROYAL TECHQUE" valor2={'R$349.00'} imgTenis13={imgCasual2}
                               nomeTenis3="TÊNIS FILA COURT ETNA" valor3={'R$329.90'} imgTenis19={imgCasual3} />
              <PaginationMegaTenis/>
              <Footer/>   
          </React.Fragment>
      );
}

