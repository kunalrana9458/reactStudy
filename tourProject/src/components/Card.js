import { useState } from "react";



function Card({id,image,info,price,name,removeTour}){
    
    const [readmore,setReadMore] = useState(false);


    function readMoreHandler(){
        setReadMore(!readmore);
    }


    const description = readmore?info:`${info.substring(0,200)}....`;
    return(
        <div className="card">
           <img src={image} className="image" alt=""></img>
           <div className="tour-info">
           <div className="tour-details">
            <h4 className="tour-price">${price}</h4>
            <h4 className="tour-name">{name}</h4>
           </div>

           <div className="description">
            {description}
            <span onClick={readMoreHandler} className="read-more">
                {readmore ? 'show less' : 'read More'}
            </span>
           </div>

           </div>

           <button onClick={() => removeTour(id)} className="btn-red">
           Not Interested
           </button>
        </div>

    );
}
export default Card;