import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'

const Home = () => {

  const {user} = useSelector((state) => state.auth);
  const navigate = useNavigate();

  useEffect(()=> {
    if(!user) navigate('/login')
  }, [user]);

  return (
    <div className="container p-5 d-flex align-item-center justify-content-center">
        <div className="card p-4 rounded-0 shadow" style={{height:'400px', width:'470px'}}>
            <h2 className="text-center mt-4">Welcome <strong className='text-danger'>{user?.name}</strong>&nbsp;!</h2>
            <p className='text-center mt-2'>Please Select an Option &nbsp;<i className="fa-solid fa-caret-down"></i></p>              
            <Link to={'/auth/new'} className="btn btn-outline-dark rounded-0 mt-5">Raise Complaint</Link>
            <Link to={'/auth/all'} className="btn btn-dark rounded-0 mt-2">View My Complaints</Link>
            
        </div>
    </div>
  )
}

export default Home