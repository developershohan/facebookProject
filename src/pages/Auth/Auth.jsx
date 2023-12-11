import  { useState } from 'react'
import "./Auth.scss"

import instaBackPic from "../../../public/instaBackPic.png"
import instaLogo from "../../../public/instaLogo.png"

import Model from '../../components/Models/Model'
import SignUpForm from '../../components/SignUpForm/SignUpForm'

const Auth = () => {

  const [showSignUp, setShowSignUp] = useState(false)


  return (

    <div>
{showSignUp && <Model hide = {setShowSignUp} >
  
  <SignUpForm/>

  </Model>}






      <div className="auth-container-wrapper">
        <div className="auth-wrapper">
          <div className="container">
            <div className="row ">
            
              <div className="col-md-6 ">
                <img className='insta_left_img' src={instaBackPic} alt="" />
              </div>
              <div className="col-md-6 px-4 auth-left-con">

                <div className="card shadow auth-login-box">
                  <div className="insta-img-top">
                    <img src={instaLogo} alt="" />
                  </div>

                  <div className="card-body w-100">
                    <form action="" method="post" className='auth-login-form'>

                      <input className='w-100' type="text" name="" id="" placeholder='Phone number, username, or email' />
                      <input className='w-100' type="text" name="" id="" placeholder='Password' />
                      <button type="submit" className='submit-btn my-2 w-100 '> Log in</button>
                    </form>
                    
                  </div>

                </div>


                <div className="card mt-4 shadow auth-login-box auth-signUp-box">

                  <div className="card-body">

                    <p className="card-text">

                      <p> Do not have an account?</p><span className='signUp-btn' onClick={()=>setShowSignUp(true)}>Sign up</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Auth