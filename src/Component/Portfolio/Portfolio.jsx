// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'
import AfterBefor from '../AfterBefor/AfterBefor'
import CardPortfolio from '../CardPortfolio/CardPortfolio'
import PictureHome from "../../assets/Home.png"
import Weather from "../../assets/Weather.png";
import FrameWork from "../../assets/FrameWork.png";
import Melifay from "../../assets/Melifay.png";
import Fokiar from "../../assets/Fokiar.png";


import crud from "../../assets/crud.png";




export default function Portfolio() {

    let title = "PORTFOLIO COMPONENT";


   let [pictures , ] = useState([
    {
      image : PictureHome ,
      link : "https://github.com/Hossamkhatap31",
      rebo : " https://hossamkhatap31.github.io/exam/",

     
      id:1,
      title: "Portfolio Assignment 7"
    },
    {
      image : crud ,
      link : "https://github.com/Hossamkhatap31",
      rebo : " https://hossamkhatap31.github.io/libarary/",
      id:2,
      title: "Crud Operation js"
    },
    
    
    {
      image : Weather ,
      link : "https://github.com/Hossamkhatap31",
      rebo:"https://hossamkhatap31.github.io/weather/",
      id :5,
      title: "Assignment Weather"

    },
    {
      image : FrameWork ,
      link : "https://github.com/Hossamkhatap31",
      rebo:'https://hossamkhatap31.github.io/Start-Framework/',
      id : 6 ,
      title: "Assignment FrameWork"
    },
    {
      image : Melifay,
      link : "",
      rebo:'',
      id : 6 ,
      title: "Melifay"
    },
    {
      image : Fokiar,
      link : "",
      rebo:'',
      id : 6 ,
      title: "Melifay"
    },
   
   ])



    
  return (
    <>

<div className=" bg-body-tertiary text-white py-5">
        <div className="text-center text-black d-flex justify-content-center">
         <AfterBefor title={title}/>
        </div>

        <div className="container py-5">
          <div className="row gy-5">
            {pictures.map((picture)=> <CardPortfolio key={picture.id} picture={picture}/>)}


          </div>
        </div>
        {}

    </div>



    
    
    
    
    
    </>

  )
}
