import React from 'react';

function Shoe(props){

    const eachShoe = props.shelfRow.shoes.map((shoe)=>  
         <img src = {shoe.imgLink} alt = "kick" className="shoe" />
    );

    return ( 

        <div> 
            {eachShoe}
        </div>
        
    )
}

export default Shoe;