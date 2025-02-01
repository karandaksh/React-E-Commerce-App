import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const Login = () => {


  const [toggle, setToggle] = useState(false)
  


  useEffect(() => {
    console.log(toggle);

  }, [toggle])


  function ShowPass() {
    const InputFiled = document.getElementById('Signup_confirm_Password')
    console.log(InputFiled);
    
  }






  return (
    <>


      <div className="grid lg:grid-cols-5 sm:grid-cols-4 px-4 my-5">
        <div className="lg:col-span-3 lg:col-start-2 sm:col-span-4 rounded-3xl bg-white shadow-lg py-4 px-2">
          {/* <div className="flex justify-between items-center gap-0 mx-2 form-toggle">
            <button className='w-full bg-green-600 py-4 rounded-s-full'>Login</button>
            <button className='w-full bg-sky-600 py-4 rounded-e-full'>Signup</button>
          </div> */}

          <div className="flex justify-between items-center gap-4 mx-2 form-toggle" onClick={() => setToggle((prev) => !prev)}>
            <button className={`w-full py-4 rounded-full ${toggle ? 'bg-green-600 ' : 'bg-white shadow-xl border-2'}`} >Login</button>
            <button className={`w-full py-4 rounded-full ${toggle ? 'bg-white shadow-xl border-2' : 'bg-sky-600 '}`} >Sign Up</button>
          </div>

          {toggle ?

            <div className="login_side mt-5 px-4">
              <h1 className=' text-3xl font-semibold text-center'>Login Form</h1>
              <label className="block text-gray-700 text-sm font-bold mb-2 mt-4" htmlFor="username">
                Enter Email or Username
              </label>
              <input type="text" id='Email_UserName' className='py-3 border form-control w-full px-4' placeholder='Enter Email or UserName' />

              <label className="block text-gray-700 text-sm font-bold mb-2 mt-4" htmlFor="password">
                Enter Password
              </label>
              <input type="password" id='password' className='py-3 border form-control w-full px-4' placeholder='Enter Password' />

              <div className="ms-auto text-right my-4">
                <Link to="" className='text-blue-500'>Forgot Password</Link>
              </div>

              <button className='py-3 bg-green-600 my-3 w-full px-4 rounded'>Login</button>


              <div className="text-center my-4">
                <p> Not A Member? <Link onClick={() => setToggle((prev) => !prev)} className='text-blue-500'>Create New Account</Link></p>
              </div>

            </div>

            :

            <div className="signup_side mt-5 px-4">
              <h1 className=' text-3xl font-semibold text-center'>SignUp Form</h1>
              <label className="block text-gray-700 text-sm font-bold mb-2 mt-4" htmlFor="Signup_Email">
                Enter Email
              </label>
              <input type="text" id='Signup_Email' className='py-3 border form-control w-full px-4' placeholder='Email' />



              <label className="block text-gray-700 text-sm font-bold mb-2 mt-4" htmlFor="Signup_Password">
                Enter Password
              </label>
              <input type="password" id='Signup_Password' className='py-3 border form-control w-full px-4' placeholder='Enter Password' />



              <label className="block text-gray-700 text-sm font-bold mb-2 mt-4" htmlFor="Signup_Confirm_Password">
                Confirm Password
              </label>
              <div className="flex relative overflow-hidden ">
                <input type="password" id='Signup_Confirm_Password' className='py-3 border form-control w-full ps-4 pe-16' placeholder='Enter Same Password' />
                <div className="absolute right-0 h-full pt-3 pe-4" onClick={ShowPass}>show</div>
              </div>


              <button className='py-3 bg-sky-600 my-3 w-full px-4 rounded'>Sign Up</button>


            </div>
          }





        </div>
      </div>


    </>
  )
}

export default Login
