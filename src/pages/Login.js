import React,{useState} from 'react'
import { useNavigate } from "react-router-dom";
import Axios from "axios";

function Login() {


  localStorage.setItem("Prov",false)
  localStorage.setItem("Role","")
  localStorage.setItem("mail","")
  const navigate=useNavigate();
  const [checkEmail,setcheckEmail]=useState("");
  const [checkPassword,setcheckPassword]=useState("");
  const checkinfo=(e)=>{
    e.preventDefault()
    console.log('send')
    Axios.post("http://localhost:3001/checkinfo",{
      email:checkEmail,
      password:checkPassword,
    }).then((Response)=>{
      console.log(Response)
      if(Response.data.Email===checkEmail && Response.data.Password===checkPassword){ 
        localStorage.setItem("Prov",true)    
        if(Response.data.Email==="admin"){
          localStorage.setItem("Role","Admin")
          localStorage.setItem("mail","admin")
        navigate("/admin.js")
        }
        else{
            localStorage.setItem("Role","Customer")
            localStorage.setItem("mail",checkEmail)
            navigate("/customer.js")
        }
 
      }
      else{
        alert("wrong password/email")
      }
    });
    
  };
  return (
    <>
    <section class="bg-gray-50 dark:bg-gray-900">
  <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                  Sign in to your account
              </h1>
              <form class="space-y-4 md:space-y-6" onSubmit={checkinfo}>
                  <div>
                      <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                      <input type="text" name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required={true} 
                        onChange={(event)=>{
                        setcheckEmail(event.target.value)}} 
                      />
                  </div>
                  <div>
                      <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                      <input type="password" name="password" id="password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required={true} 
                      onChange={(event)=>{
                        setcheckPassword(event.target.value)}}
                      />
                  </div>
                  <button type="submit" class="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
              </form>
          </div>
      </div>
  </div>
</section>
    </>
  )
}

export default Login