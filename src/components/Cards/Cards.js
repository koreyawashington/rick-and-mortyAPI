

import React from 'react'
import styling from './Cards.module.scss'


const Cards = ({results}) => {
    
    let display;
    console.log(results);
    
    if(results){
        //the x at the start of the arrow function will target the results one at a time.
        display = results.map((x)=>{
            //now I will destructure the x
            let{ id, name, image, location, status } = x;
            
            
            
            return(
            <div key={ id } className="col-4 mb-4 position-relative">
                
                <div className={ styling.cards }>
                    
                    <img src={ image } alt="" className={`${styling.img} img-fluid`} />

                {/* div style padding will determine styling of the text below the image of the card gets */}
                    <div style={{ padding : "21px"}}className="content">
                    
                        <div className="fs-4 fw-bold mb-4">{name}</div>
                       
                       <div className="">
                       
                            <div className="fs-6">Last Known Location</div>
                            <div className="fs-5">{location.name}</div>
                            </div>         
                    </div>
                </div>


                {/* If the status of a character is "Dead" then the badge will show a read color. 
                Else if the status of a character is "Alive" 
                Else if the status of the character is anything else return a secondary color for the badge*/}
              {(()=>{
                if(status === "Dead"){
                    return(
                        <div className={`${styling.badge} position-absolute badge bg-danger`}>{status}</div>    
                    )
                }else if(status === "Alive"){
                    return(
                        <div className={`${styling.badge} position-absolute badge bg-success`}>{status}</div>
                    )
                }else{
                    return(<div className={`${styling.badge} position-absolute badge bg-secondary`}>{status}</div>
                    )
                 }
                //  invoke the function with no name at the end with a set of closing parentheses. No name needed for this function called IIFE
              })()}
              
            
            </div>
            );
        });
    
    
    
    }else{
        display = "No Characters Found :/;"
    }
  
    
    
    return <>{display}</>
  
}

export default Cards