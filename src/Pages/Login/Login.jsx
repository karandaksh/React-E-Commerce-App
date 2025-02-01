import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';

import './Login.css'

const Login = () => {




  // const div_container = document.getElementsByClassName('div_container') // Get the first element

  // console.log(div_container);


  // function SignIn() {
  //   console.log(div_container); // To see the element in the console

  //   // Remove the "right-panel-active" class
  //   div_container.classList.remove("right-panel-active");
  // }

  // function SignUp() {
  //   console.log(div_container); // To see the element in the console

  //   // Add the "right-panel-active" class
  //   div_container.classList.add("right-panel-active");
  // }




  // useEffect(() => {
  //   const divContainer = document.getElementsByClassName('div_container')[0]; // Get the first element
  //   console.log(divContainer);
  // }, []);



  

  function SignIn() {
    const divContainer = document.getElementsByClassName('div_container')[0]; // Access the first element of the collection
    console.log(divContainer); // To see the element in the console

    // Remove the "right-panel-active" class
    if (divContainer) {
      divContainer.classList.remove('right-panel-active');
    }
  }

  function SignUp() {
    const divContainer = document.getElementsByClassName('div_container')[0]; // Access the first element of the collection
    // console.log(divContainer); // To see the element in the console

    // Add the "right-panel-active" class
    if (divContainer) {
      divContainer.classList.add('right-panel-active');
    }
  }

  
  
  
  
  

  return (
    <>


      <div className="grid grid-cols-5 my-5">
        <div className="col-span-3 col-start-2 rounded-full  shadow-lg py-4 px-2">
          {/* <div className="flex justify-between items-center gap-4 mx-2">
            <button className='w-full rounded-full bg-green-600 py-4'>Login</button>
            <button className='w-full rounded-full bg-green-600 py-4'>Signup</button>
          </div> */}
          <div id="div_container" className='div_container'>
            <div className="form-container sign-up-container">
              <form action="#">
                <h1>Create Account</h1>
                <div className="social-container">
                  <Link to="" className="social"><i className="fab fa-facebook-f"></i></Link>
                  <Link to="" className="social"><i className="fab fa-google-plus-g"></i></Link>
                  <Link to="" className="social"><i className="fab fa-linkedin-in"></i></Link>
                </div>
                <span>or use your email for registration</span>
                <input type="text" placeholder="Name" />
                <input type="email" placeholder="Email" />
                <input type="password" placeholder="Password" />
                <button>Sign Up</button>
              </form>
            </div>
            <div className="form-container sign-in-container">
              <form action="#">
                <h1>Sign in</h1>
                <div className="social-container">
                  <Link to="" className="social"><i className="fab fa-facebook-f"></i></Link>
                  <Link to="" className="social"><i className="fab fa-google-plus-g"></i></Link>
                  <Link to="" className="social"><i className="fab fa-linkedin-in"></i></Link>
                </div>
                <span>or use your account</span>
                <input type="email" placeholder="Email" />
                <input type="password" placeholder="Password" />
                <Link to="">Forgot your password?</Link>
                <button>Sign In</button>
              </form>
            </div>
            <div className="overlay-container">
              <div className="overlay">
                <div className="overlay-panel overlay-left">
                  <h1>Welcome Back!</h1>
                  <p>To keep connected with us please login with your personal info</p>
                  <button className="ghost" id="signIn" onClick={SignIn}>Sign In</button>
                </div>
                <div className="overlay-panel overlay-right">
                  <h1>Hello, Friend!</h1>
                  <p>Enter your personal details and start journey with us</p>
                  <button className="ghost" id="signUp" onClick={SignUp}>Sign Up</button>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>


    </>
  )
}

export default Login
