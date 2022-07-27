import React from "react";

import { Routes, Route} from "react-router-dom";


import { Home } from "./Home";
import { Login } from "../Components/Login";
import { FormClient } from "../Components/FormClient";
import { ModalCarrinho } from "../Components/ModalCarrinho";
import { ItemProduto } from "./ItemProduto";
import { Novidades } from "../Components/Novidades";
import { Carrinho } from "./Carrinho";







export function ControladorDeRotas() {
    return(
        <React.Fragment>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/Login" element={<Login/>} />
                <Route path="/Login/FormClient" element={<FormClient/>} />
                <Route path="/FormClient/Login" element={<Login/>} />
                <Route path="/FormClient" element={<FormClient/>} />
                <Route path="/Login/FormClient/Login" element={<Login/>} />
                <Route path="/Novidades" element={<Novidades/>} />
                <Route path="/ModalCarrinho" element={<ModalCarrinho/>} />
                <Route path="/ItemProduto" element={<ItemProduto/>} />
                <Route path="/ItemProduto/FormClient" element={<FormClient/>} />
                <Route path="/ItemProduto/Login" element={<Login/>} />
                <Route path="/ItemProduto/FormClient/Login" element={<Login/>} />
                <Route path="/ItemProduto/ModalCarrinho" element={<ModalCarrinho/>} />
                <Route path="/ItemProduto/Carrinho" element={<Carrinho/>} />
                <Route path="/ItemProduto/Carrinho/ModalCarrinho" element={<ModalCarrinho/>} />
                <Route path="/ItemProduto/Carrinho/Login" element={<Login/>} />
                <Route path="/Ofertas/:id" element={<h1>Página Dinâmica</h1>} />
                
            </Routes>
        </React.Fragment>

    );
}