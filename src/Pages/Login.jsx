import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const Login = () => {


  const [toggle, setToggle] = useState(false)
  const [passwordVisible, setPasswordVisible] = useState(false)
  const [loginPasswordVisible, setLoginPasswordVisible] = useState(false)
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false)


  const intialValues = { form_name: '', form_Email: '', form_password: '', confirm_password: '' }
  const [formValues, setFormValues] = useState(intialValues)
  const [formErrors, setFormErrors] = useState({})
  const [isSubmit, setIsSubmit] = useState(false)




  const handleChange = (e) => {
    // console.log(e.target);
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value })
    // console.log(formValues);
  }



  const handleSubmit = (e) => {
    e.preventDefault()
    setFormErrors(validate(formValues))
    setIsSubmit(true)
  }




  useEffect(() => {
    // console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
      setFormValues(intialValues)
    }
  }, [formErrors])







  const validate = (values) => {
    const errors = {}
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^s@]{2,}$/i
    const regexPassword = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*(),.?":{}|<>]).{4,12}$/;

    if (!values.form_name) {
      errors.form_name = "Name is Required"
    }

    if (!values.form_Email) {
      errors.form_Email = "Email is Required"
    }
    else if (!regexEmail.test(values.form_Email)) {
      errors.form_Email = "This is not a vaild Email Format  "
    }


    if (!values.form_password) {
      errors.form_password = "Password is Required"
    }
    else if (!regexPassword.test(values.form_password)) {
      errors.form_password = "Password Must one Character 0-9 , A-z, 1 Special Character Length 04 - 12 "
    }

    if (!values.confirm_password) {
      errors.confirm_password = "Confirm Password is Required"
    }
    else if (!regexPassword.test(values.confirm_password)) {
      errors.confirm_password = "Password Must one Character 0-9 , A-z, 1 Special Character Length 04 - 12 "
    }
    else if (values.form_password !== values.confirm_password) {
      errors.confirm_password = "Password Does't Match Password "
    }

    return errors
  }






  return (
    <>


      {Object.keys(formErrors).length === 0 && isSubmit ? (<div className='bg-green-400 py-3 px-8 text-lg text-center'>SignUp SuccessFully</div>) : ''}
      <div className="grid lg:grid-cols-5 sm:grid-cols-4 px-4 my-5">



        <div className="lg:col-span-3 lg:col-start-2 sm:col-span-4 rounded-3xl bg-white shadow-lg py-4 px-2">


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

              {/* <label className="block text-gray-700 text-sm font-bold mb-2 mt-4" htmlFor="password">
                  Enter Password
                </label>
                <input type="password" id='password' className='py-3 border form-control w-full px-4' placeholder='Enter Password' /> */}


              <label className="block text-gray-700 text-sm font-bold mb-2 mt-4" htmlFor="Login_Password">
                Enter Password
              </label>
              <div className="flex relative overflow-hidden ">
                <input type={loginPasswordVisible ? 'text' : 'password'} id='Login_Password' className='py-3 border form-control w-full ps-4 pe-16' placeholder='Enter Password' />
                <div className="absolute right-0 h-full pt-3 pe-4" onClick={() => setLoginPasswordVisible((prev) => !prev)}>{loginPasswordVisible ? 'Hide' : 'Show'}</div>
              </div>


              <div className="ms-auto text-right my-4">
                <Link to="" className='text-blue-500'>Forgot Password</Link>
              </div>

              <button className='py-3 bg-green-600 my-3 w-full px-4 rounded'>Login</button>


              <div className="text-center my-4">
                <p> Not A Member? <Link onClick={() => setToggle((prev) => !prev)} className='text-blue-500'>Create New Account</Link></p>
              </div>

            </div>

            :

            <>

              {/* {JSON.stringify(`name : ${formValues.form_name} , email : ${formValues.form_Email} , password : ${formValues.form_password}`)} */}



              <div className="signup_side mt-5 px-4">
                <h1 className=' text-3xl font-semibold text-center'>SignUp Form</h1>

                <form onSubmit={handleSubmit}>

                  <label className="block text-gray-700 text-sm font-bold mb-2 mt-4" htmlFor="Signup_Name">
                    Name
                  </label>
                  <input type="text" id='Signup_Name' className='py-3 border form-control w-full px-4' placeholder='Name' name='form_name' value={formValues.form_name} onChange={handleChange} />
                  <p className='text-red-600'>{formErrors.form_name}</p>



                  <label className="block text-gray-700 text-sm font-bold mb-2 mt-4" htmlFor="Signup_Email">
                    Enter Email
                  </label>
                  <input type="text" id='Signup_Email' className='py-3 border form-control w-full px-4' placeholder='Email' name='form_Email' value={formValues.form_Email} onChange={handleChange} autoComplete="email" />
                  <p className='text-red-600'>{formErrors.form_Email}</p>



                  <label className="block text-gray-700 text-sm font-bold mb-2 mt-4" htmlFor="Signup_Password">
                    Enter Password
                  </label>
                  <div className="flex relative overflow-hidden ">
                    <input type={passwordVisible ? 'text' : 'password'} id='Signup_Password' className='py-3 border form-control w-full ps-4 pe-16' placeholder='Enter Password' name='form_password' value={formValues.form_password} onChange={handleChange} maxLength={12} minLength={4} autoComplete="new-password" />
                    <div className="absolute right-0 h-full pt-3 pe-4" onClick={() => setPasswordVisible((prev) => !prev)}>{passwordVisible ? 'Hide' : 'Show'}</div>
                  </div>
                  <p className='text-red-600'>{formErrors.form_password}</p>




                  <label className="block text-gray-700 text-sm font-bold mb-2 mt-4" htmlFor="Signup_Confirm_Password">
                    Confirm Password
                  </label>
                  <div className="flex relative overflow-hidden ">
                    <input type={confirmPasswordVisible ? 'text' : 'password'} id='Signup_Confirm_Password' className='py-3 border form-control w-full ps-4 pe-16' placeholder='Enter Same Password' name='confirm_password' value={formValues.confirm_password} onChange={handleChange} maxLength={12} minLength={4} autoComplete="new-password" />
                    <div className="absolute right-0 h-full pt-3 pe-4" onClick={() => setConfirmPasswordVisible((prev) => !prev)}>{confirmPasswordVisible ? 'Hide' : 'Show'}</div>
                  </div>
                  <p className='text-red-600'>{formErrors.confirm_password}</p>


                  <button className='py-3 bg-sky-600 my-3 w-full px-4 rounded'>Sign Up</button>

                </form>


              </div>
            </>
          }





        </div>
      </div>


    </>
  )
}

export default Login
