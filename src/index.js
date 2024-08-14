import ReactDOM from "react-dom/client";
import React from "react";
import { App } from "./App";  

const rootDiv = document.getElementById("root");
const reactRoot = ReactDOM.createRoot(rootDiv);

reactRoot.render(<App />);


//importer les outils React
//import ReactDOM from "react-dom/client";
//import React from "react";

// importer notre premier composant : App (composant parent le plus haut)
//import { App } from "./App";

// cibler la div dont l'id est root
//const rootDiv = document.getElementById("root");

// créer un noeud racine react à partir de la div root (premier noeud de notre DOM virtuel )
//const reactRoot = ReactDOM.createRoot(rootDiv);

//Injecter notre premier composant le noeud racine
//reactRoot.render(<App></App>);