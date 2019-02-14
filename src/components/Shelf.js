import React from 'react';
import Row from './Row.js'

function Shelf(props){

    const allRows = props.shelf1.map((shelfRow)=> 
        <Row shelfRow = {shelfRow}/>
        //Tester code for which row: {shelfRow.row} 
    );

    return ( 
        //This is the entirety of the Shelf:
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