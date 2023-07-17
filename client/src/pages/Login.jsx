import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../Context/authContext'
import picture from '../Assets/old-man.png';
// this is used in context not here anymore
// import { loginUser } from '../services/Login'

const Login = () => {
  
  const [inputs, setInputs] = useState({
    username:"",
    password:""
  })

  const [err,setErr] = useState(null)

  const navigate = useNavigate()

  //login should come from the context api
  const {login} = useContext(AuthContext)
  
  const handleChange = e => {
    setInputs(prev=>({...prev, [e.target.name]: e.target.value}))
  }

  const handleSubmit = async e => {
    e.preventDefault();
    await login(inputs).then((result) => {
       navigate('/')

    }).catch((err) => {
      setErr(err.response.data)
    });
   


  }

  return (
    <div className='loginDiv'>
     
      <div className='box'> <img src={picture} alt="senior-woman" /></div>
      <div className='box' > 
      <form>
      <h1>Login</h1>
        <input required type='text'  placeholder='username' name='username' onChange={handleChange}/>
        <input required type='password' placeholder='password' name='password' onChange={handleChange}/>
        <button onClick={handleSubmit}>Login</button>
        {err && <p>{err}</p>}
        <span>Dont Have an Account ? <Link to='/register'>Register</Link></span>
      </form>
      </div>
    


    </div>
  )
}

export default Login