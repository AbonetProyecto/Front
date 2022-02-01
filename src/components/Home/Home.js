import React from 'react';
import '../../App.css';
import Footer from "../Footer/Footer";
import Formulario from "../Formulario/Formulario";

export default function Home() {
    return (
        <div>
            <h1 className='home'>Bienvenidos a ABONET</h1>
            <h2 className='pie'>Nuestra pagina te ayuda a encontrar el abogado ideal para ti </h2>
            <Formulario/>
            <Footer/>
        </div>
    );
}
