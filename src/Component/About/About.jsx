// eslint-disable-next-line no-unused-vars
import React from 'react'
import AfterBefor from '../AfterBefor/AfterBefor'

export default function About() {

  let title = " ABOUT COMPONENT ";
  return (
    <div className=" bg-body-tertiary d-flex justify-content-center align-items-center text-black py-5">
      <div>
      


      <div className=" d-flex justify-content-center pt-4 pb-5">
        {/* <img src={HomePicture} className=" w-100" alt="" /> */}
        <AfterBefor title={title}/>
      </div>
      

      <div className="container">
        <div className="row justify-content-around">
          <div className="col-md-5 col-sm-11 py-4">
            <div className="fs-4">
              <p>
                
              I am  Hossam Khatap and I have experience in the field of web development and design.
              </p>
              <p>
              I always look forward to confrontation, challenge and thinking outside the box I strive to create beautiful and immersive web through carefully designed and user focused code instructions I am passionate and energetic as I can develop my skills and gain more experience.

              </p>
              <p>
              What do I do in my work:
               <p>1- Design and build an entire website and landing pages from scratch using .</p>
                
                <p>3- Build your site professionally and responsive to all screens.</p>
                <p>4- Responsive Design (Media Query).</p>
              </p>
            </div>
          </div>
          <div className="col-md-5 col-sm-11 fs-4 py-4">
            <div>
              <p >
                
                SKILS
              </p>
              <p>
                <i className="fas fa-star text-warning"></i> HTML , HTML5
              </p>
              <p>
                <i className="fas fa-star text-warning"></i> CSS , CSS3
              </p>
              <p>
                <i className="fas fa-star text-warning"></i> JavaScript
              </p>
              <p>
                <i className="fas fa-star text-warning"></i> Bootstrap
              </p>
              <p>
                <i className="fas fa-star text-warning"></i> Tailwind-css
              </p>
              <p>
                <i className="fas fa-star text-warning"></i> React
              </p>
              
            </div>
          </div>
        </div>




      </div>
            
      </div>
    </div>
  )
}
