import React from 'react';
import Shoe from './Shoe.js';

function Row(props){

    const eachShoe = props.shelfRow.shoes.map((shoe)=>  
        <Shoe shoe = {shoe} />
        //  <img src = {shoe.imgLink} alt = "kick" className="shoe" />
    );

    return ( 
        <div> 
            {eachShoe}
        </div>
        
    )
}

export default Row;