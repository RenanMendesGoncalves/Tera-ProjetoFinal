
import React from "react";

import './Login.css';
import { Link } from "react-router-dom";


import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

export default function Login(){
	return(
		
		<Authenticator>
			
			{({signOut, user}) => (
				<div className="App">
					<p>
					Usuário Autenticado com Sucesso!!<br></br>
					Token de Autenticação: {user.username}
					</p>
						<Link to="/">
							<button className="btn btn-secondary" onClick={signOut}>Voltar às Compras</button>
						</Link> 
				</div>
			)}
			
		</Authenticator>
	);
}




