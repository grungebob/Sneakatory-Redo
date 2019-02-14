import React, { Component } from 'react';

class Shoe extends Component {
  constructor(props){
    super(props);
    // console.log('PROPS: ', this.props.shoe.imgLink);
    this.shoe = { 
        imgLink: this.props.shoe.imgLink, 
    };
  }  

  render() {
    return (
        <div class="shoe flipTop">
            {/* <div class = "FrontSide">  */}
                <img src = {this.shoe.imgLink} alt = "Kick" />
            {/* </div> */}
            {/* <div class="BackSide">
                <span>Your content here.</span>
            </div> */}
        </div>
    );
  }
}

export default Shoe;
