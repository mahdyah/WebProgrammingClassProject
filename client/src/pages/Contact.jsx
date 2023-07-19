
import React , { useContext, useState } from 'react'
import axios from 'axios';
import blogLogo from '../Assets/logo.png';
import { contactUser } from '../services/Contact'
import { Link, useNavigate } from 'react-router-dom'
const Contact =() => {
 
  const [inputs, setInputs] = useState({
    name:"",
    email:"",
    message: ""
  })

  const [err,setErr] = useState(null)
  const navigate = useNavigate()

  const handleChange = e => {
    setInputs(prev=>({...prev, [e.target.name]: e.target.value}))
  }
  const handleSubmit = async e =>{
e.preventDefault();
await contactUser(inputs).then((result)=>{
  navigate('/home')
}).catch((err) => {
  setErr(err.response.data)
})
  };

 
    return(
      <div className="contact">
        
        <form id="contact-form" 
    
        method="POST">
          <h2>Send Us A Message</h2>
          <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" className="form-control" id="name" 
              // value={this.state.name}
              onChange={handleChange}
                />
          </div>
          <div className="form-group">
              <label htmlFor="useremail">Email address</label>
              <input type="email" className="form-control" id="useremail" aria-describedby="emailHelp" 
              // value={this.state.email} 
              onChange={handleChange}
               />
          </div>
          <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea className="form-control" rows="5" id="message" 
              // value={this.state.message} 
              onChange={handleChange}
               />
          </div>
          <button onSubmit={handleSubmit} type="submit" className="btn btn-primary">Send</button>
        </form>
        
        <div className="info"> 
        <img src={blogLogo} alt="" />
        <div className="address">
          <div className="map">
            <h5>Address</h5>
          </div>
          <p>221B Baker Street, London, UK</p>
        </div>

        <div className="phone">
          <div className='telephone'>
          <h5>Phone</h5>
          </div>
        <p>+1 999-999-9999</p>

        </div>
        <div className="email"></div>
        <div className="letter">
          <h5>Email</h5>
        </div>
        <p>contact@example.com</p>
        </div>
      </div>
    );

}
export default Contact