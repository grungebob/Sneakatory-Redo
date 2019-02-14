import React from 'react';
import Shoe from './Shoe.js'

function Row(props){

    const eachShoe = props.shelfRow.shoes.map((shoe)=> 
            <Shoe shoe={shoe} />
    );

    return ( 
        //This is a singular row:
        <div class="table-row"> 
            {eachShoe}
        </div>
        
    )
}

export default Row;