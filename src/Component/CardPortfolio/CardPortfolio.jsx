/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'
import CssCard from "../CardPortfolio/CardPortfolio.module.css"
import AfterBefor from '../AfterBefor/AfterBefor';
// import PictureHome from "../../assets/Home.png"

 
export default function CardPortfolio({picture}) {

    let [isTrue,setTrue] =useState(false);
    let [isNone,setNone] =useState("d-none");
    function hover(){
        setTrue(true ) ;
    }
    function leave(){
        setTrue(false ) ;
    }

    function click(){
        setNone("d-none")


    }
    function click2(){
        setNone("d-block")
       
        
    }
  return (
    <>
                    <div className="col-sm-12 col-md-4">
                  <div className="position-relative p-3 shadow-lg" onMouseMove={hover} onMouseLeave={leave}>
                    <img src={picture.image} className="w-100" alt="" />
                    {isTrue ? <div className={`d-flex justify-content-center align-items-center  position-absolute  bg-white  opacity-75 text-black ${CssCard.layer}`} onClick={click2}>
                    <p  ><i className="fas fa-plus"></i> </p>
                     </div> : ""}

                  </div>

                </div>







<div className={`vh-100 position-absolute start-0 end-0 bottom-0  d-flex justify-content-center align-items-center ${isNone} `}>

<div className="vh-100 position-absolute top-0 start-0 end-0 bottom-0 bg-black opacity-25 fl" onClick={click}>

</div>

<div className={`d-flex flex-column justify-content-center align-items-center  bg-white opacity-100 rounded-4 z-3 position-relative ${CssCard.imageCard}`}>
    <div className={`position-absolute text-black ${CssCard.icon}`} onClick={click}>
        <i className="fas fa-close"></i>
    </div>

   <div>
   <AfterBefor title={picture.title}/>
   </div>
  <div className="w-100 mx-auto">
  <img src={picture.image} className="w-100" alt="" />
  </div>
  <div className="py-3 text-black">
    <h3>HTML , CSS , BOOTSTRAP , JAVASCRIPT</h3>
  </div>
  
  <div className="   mx-auto py-3">
  <a href={picture.link} className="pe-3" target="_blank">
     <button className="btn btn-outline-dark px-5"> Demo</button>
  </a>
  <a href={picture.rebo} className="ps-3" target="_blank">
     <button className="btn btn-dark px-5"> Rebo</button>
  </a>
  </div>


</div>




</div>
                


    
    
    
    
    
    
    </>

            
  )
}
