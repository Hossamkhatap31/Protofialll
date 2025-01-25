// eslint-disable-next-line no-unused-vars
import React from 'react'
import HomePicture from '../../assets/sweet.jpg'
import AfterBefor from '../AfterBefor/AfterBefor'
import { ReactTyped } from 'react-typed';
import cssHome from "../Home/Home.module.css"


export default function Home() {

  let title = " Hossam Khatap";



  return (
    <div className="vh-100 bg-body-tertiary py-5 d-flex justify-content-center align-items-center text-white">
      <div>


      <div className={cssHome.imagePro} >
        <img src={HomePicture} className=" w-100 rounded-circle" alt="" />
      </div>
      <div className="d-flex justify-content-center">

      <AfterBefor title={title}/>
      </div>

      <div className="text-center text-black fs-2 pt-3">


      <ReactTyped
      strings={[
        
        "Web Designer",
        "Front-End Developer",
        
        "Web Development",
      ]}
      typeSpeed={40}
      backSpeed={50}
      loop={true}

    >
      
    </ReactTyped>
      </div>
      
      

    



        
      </div>

      






    </div>
  )
}
