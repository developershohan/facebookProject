import React from 'react'
import "./Auth.scss"

import instaBackPic from "../../../public/instaBackPic.png"
import instaLogo from "../../../public/instaLogo.png"

const Auth = () => {
  return (
    <div>
      <div className="auth-container-wrapper">
        <div className="row ">
          <div className="col-md-6">
            <img className='insta_left_img ' src={instaBackPic} alt="" />
          </div>
          <div className="col-md-6">
            
            <div className="card auth-login-box">
              <div className="insta-img-top">
              <img src={instaLogo} alt=""/>
              </div>

              <div className="card-body w-100 bg-success">
<input className='w-100' type="text" name="" id="" />
<input className='w-100' type="text" name="" id="" />
                <p className="card-text">Body</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Auth