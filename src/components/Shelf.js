import React from 'react';
import Shoe from './Shoe.js'

function Shelf(props){

    const allRows = props.shelf1.map((shelfRow)=> 
        <div class="table-row"> <Shoe shelfRow = {shelfRow}/> </div>
        //Tester code for which row: {shelfRow.row} 
    );

    return ( 

        <div> 
        {allRows}
        </div>
        
    )
}

export default Shelf;


/* TEST DIV */
/*
<div>
    <div> THIS IS  A Test SHELF </div>
    <div>{props.shelf1[0].row}</div>
    <img src = {props.shelf1[0].shoes[0].imgLink} alt="TEST" />
    <div>{props.shelf1[0].shoes[0].brand}</div>
</div>
*/