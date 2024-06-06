import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { registerUser } from '../providers/auth/authSlice';

const Register = () => {


  const {user, isError, isSuccess, isLoading, message} = useSelector((state)=> state.auth);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name :'',
    email : '',
    password : '',
    password2 : '',
  });

  const {name, email, password, password2} = formData;


  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name] : e.target.value
  });
  };



  const handleSubmit = (e) => {
    e.preventDefault(); 

    if(password !== password2){
      toast.error('Password Not Match!')
    }
    // console.log(formData);
    dispatch(registerUser(formData))

    };



  useEffect(()=>{
    if(user){
      navigate('/');
    }

    if(isError && message){
      toast.error(message);
    }
  },[user, isSuccess, isError, message]);
  
  
  if(isLoading){
    return (
      <div className="container p-5">
        <h1 className='text-center text-secondary '>Loading...</h1>
      </div>
    )
  };
    
  return (
    <div className="container p-5 d-flex align-item-center justify-content-center">
        <div className="card p-4 rounded-0 shadow" style={{height:'500px', width:'470px'}}>
            <h3 className="text-center mt-4">REGISTER HERE</h3>
            <p className='text-center text-secondary mt-1'>Please enter your details!</p>   
            <form className='my-3 px-4' onSubmit={handleSubmit}>
              <input type="text" className='form-control rounded-0 my-2' placeholder='Enter Name' name='name' required value={name} onChange={handleChange} />
              <input type="email" className='form-control rounded-0 my-2' placeholder='Enter Email' name='email' required value={email} onChange={handleChange}/>
              <input type="password" className='form-control rounded-0 my-2' placeholder='Enter Password' name='password' required value={password} onChange={handleChange}/>
              <input type="password" className='form-control rounded-0 my-2' placeholder='Confirm Password' name='password2' required value={password2} onChange={handleChange}/>
              <button className="btn btn-dark rounded-0 mt-3 w-100">Register</button>            
             <hr className='mt-4'/>
            <p className='text-center text-secondary'>Already have an account? <a className='text-secondary' href="/login">Login here</a></p>
            </form>
        </div>
    </div>
  )
}

export default Register