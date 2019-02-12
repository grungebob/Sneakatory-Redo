import React, { Component } from 'react';

function Shelf(props){
    return ( 
        <div>
            <div> THIS IS  A SHELF </div>
            <div>{props.shelf1[0].row}</div>
        </div>
    )
}

export default Shelf;