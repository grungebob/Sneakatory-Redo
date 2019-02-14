import React, { Component } from 'react';

class Shoe extends Component {
  constructor(props){
    super(props);
    // console.log('PROPS: ', this.props.shoe.imgLink);
    this.shoe = {
        id: this.props.shoe.id,
        brand: this.props.shoe.brand,
        style: this.props.shoe.style,
        size: this.props.shoe.size,
        UPC: this.props.shoe.UPC,  
        img: this.props.shoe.imgLink, 
    };
    this.seeInfo = this.seeInfo.bind(this);
  } 

  seeInfo() {
    alert('ID: ' + this.shoe.id + '\nBrand: ' + this.shoe.brand
            + '\nStyle: ' + this.shoe.style + '\nUPC: ' + this.shoe.UPC);
  };

  render() {
    return (
        <img src = {this.shoe.img} alt = "Kick" class = "table-row element" onClick={this.seeInfo}/>

    );
  }
}

export default Shoe;