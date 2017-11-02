import React from 'react';
import Casilla from './Casilla.jsx';

export default class Tablero extends React.Component {
  constructor(props) {
    super(props);
    this.tableroClick = this.tableroClick.bind(this);
  }

  tableroClick(numeroFila, numeroColumna){
    this.props.manejadorTableroClick(numeroFila, numeroColumna);
  }

  render(){
     let casillas = this.props.valores.map(function(valoresFila, indiceFila){
       let fila = valoresFila.map(function(valor, indiceColumna){
           let mykey = ""+indiceFila+indiceColumna;
           return (
               <Casilla valor={valor} indiceFila={indiceFila} indiceColumna={indiceColumna} key={mykey} manejadorClick={this.tableroClick}/>
               )
           }.bind(this));
       return (
         <div key={"fila"+indiceFila}>
           {fila}
         </div>
       )
     }.bind(this));

     return (
       <div>
         {casillas}
       </div>
     );
   }

}
