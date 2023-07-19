import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { registerUser } from '../services/Register'
import picture from '../Assets/old-man.png';
const Register = () => {
  
  const [inputs, setInputs] = useState({
    username:"",
    email:"",
    password:""
  })

  const [err,setErr] = useState(null)

  const navigate = useNavigate()
  
  const handleChange = e => {
    setInputs(prev=>({...prev, [e.target.name]: e.target.value}))
  }


  const handleSubmit = async e => {
    e.preventDefault();
   await  registerUser(inputs).then((result) => {
      navigate('/login')
    }).catch((err) => {
      setErr(err.response.data)
    })

  }

  return (
    <div className='loginDiv'>
    <div className='box'> <img src={picture} alt="senior-woman" /></div>
      <div className='box' > 
    <form>
    <h1>Register</h1>
      <input required type='text' placeholder='username' name='username' onChange={handleChange}/>
      <input required type='email' placeholder='email' name='email' onChange={handleChange}/>
      <input required type='password' placeholder='password' name='password' onChange={handleChange}/>
      <button onClick={handleSubmit}>Register</button>
      {err && <p>{err}</p>}
      <span>Already Have an Account ? <Link to='/login'>Login</Link></span>
    </form>

    </div>
  </div>
  )
}

export default Register