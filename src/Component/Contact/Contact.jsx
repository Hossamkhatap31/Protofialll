// eslint-disable-next-line no-unused-vars
import React from 'react'
import AfterBefor from '../AfterBefor/AfterBefor'
import CssCOntact from "../Contact/Contact.module.css"

export default function Contact() {

  let title="CONTACT COMPONENT"
  return (
    <div className="text-black py-5">
      <div className="d-flex justify-content-center">
        <AfterBefor title={title}/>
      </div>

      <div className={` mx-auto py-5  ${CssCOntact.contactForm}`}>
        <form action="" onSubmit={(e)=>{e.preventDefault()}}>


        <div className="form-floating mb-3">
          <input type="text" className="form-control" id="floatingInputName" placeholder="Name" />
          <label htmlFor="floatingInputName"><i className="fa-solid fa-user"></i> Full Name</label>
        </div>
        <div className="form-floating mb-3">
          <input type="number" className="form-control" id="floatingInputAge" placeholder="name@example.com" />
          <label htmlFor="floatingInputAge"><i className="fa-brands fa-pagelines"></i> Your Age</label>
        </div>
        <div className="form-floating mb-3">
          <input type="email" className="form-control" id="floatingInputEmail" placeholder="name@example.com" />
          <label htmlFor="floatingInputEmail"><i className="fa-solid fa-envelope"></i> Email address</label>
        </div>
        <div className="form-floating mb-3">
          <input type="password" className="form-control" id="floatingInputPass" placeholder="name@example.com" />
          <label htmlFor="floatingInputPass"><i className="fa-solid fa-key"></i> Password</label>
        </div>



        <div className="d-flex gap-4 justify-content-center">
          <button className="btn btn-outline-dark px-5">Send</button>
          <button className="btn btn-outline-success px-5">Reset Form</button>
        </div>







        </form>
      </div>
    </div>
  )
}
