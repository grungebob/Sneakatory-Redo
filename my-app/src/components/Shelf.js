import React, { Component } from 'react';

function Shelf(props){
    const allRows = props.shelf1.map((shelfRow)=> 
        <div> {shelfRow.row} </div>
    );
    return ( 
        <div> {allRows} </div>
        /* TEST DIV */
        // <div>
        //     <div> THIS IS  A Test SHELF </div>
        //     <div>{props.shelf1[0].row}</div>
        //     <img src = {props.shelf1[0].shoes[0].imgLink} alt="TEST" />
        //     <div>{props.shelf1[0].shoes[0].brand}</div>
        // </div>
    )
}

export default Shelf;