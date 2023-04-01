import React from 'react'
import styling from './Cards.module.scss'


const Cards = ({results}) => {
    
    let display;
    console.log(results);
    
    if(results){
        //the x at the start of the arrow function will target the results one at a time.
        display = results.map((x)=>{
            //now I will destructure the x
            let{id, name, image, location, status} = x;
            return(
            <div key={id} className="col-4 position-relative">
                <div className="">
                    <img src={image} alt="" className="img-fluid" />
                    <div className="content">
                        <div className="fs-4 fw-bold mb-4">{name}</div>
                        <div className="">
                            <div className="fs-6">Last Known Location</div>
                            <div className="fs-5">{location.name}</div>
                            </div>         
                    </div>
                </div>
               <div className={`${styling.badge} position-absolute badge bg-danger`}>{status}</div>
            </div>
            );
        });
    }else{
        display = "No Characters Found :/;"
    }
  
    return <>{display}</>
  
}

export default Cards