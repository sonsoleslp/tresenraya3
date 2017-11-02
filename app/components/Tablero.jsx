import React from 'react';
import Casilla from './Casilla.jsx';

export default class Tablero extends React.Component {
    constructor(props) {
        super(props);
        this.tableroClick = this.tableroClick.bind(this);
    }

    tableroClick(numeroFila, numeroColumna) {
        this.props.manejadorTableroClick(numeroFila, numeroColumna);
    }

    render() {
        let casillas = this.props.valores.map((valoresFila, indiceFila) => {
            let fila = valoresFila.map((valor, indiceColumna) => {
                let mykey = "" + indiceFila + indiceColumna;
                return (
               <Casilla valor={valor} indiceFila={indiceFila} indiceColumna={indiceColumna} key={mykey} manejadorClick={this.tableroClick}/>
                );
            });
            return (
         <div key={"fila" + indiceFila}>
           {fila}
         </div>
            );
        });

        return (
       <div>
         {casillas}
       </div>
        );
    }

}
