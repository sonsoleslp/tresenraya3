import React from 'react';

const casillaStyle = {
  height: '100px',
  width: '100px'
};

export default class Casilla extends React.Component {
  constructor(props) {
    super(props);
    this.casillaClick = this.casillaClick.bind(this);
  }

  casillaClick(){
    if(this.props.valor==="-"){
      this.props.manejadorClick(this.props.indiceFila, this.props.indiceColumna);
    }
  }

  render(){
    return (
      <button style={casillaStyle} className={this.props.valor==="-" ? "clickable":"no_clickable"} onClick={this.casillaClick}>
        {this.props.valor}
      </button>
    )
  }

}
