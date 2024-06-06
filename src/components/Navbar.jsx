import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { logoutUser } from '../providers/auth/authSlice'

const Navbar = () => {

  const {user} = useSelector((state)=> state.auth)
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logoutUser());
  }

  return (
    <nav className="navbar bg-body-tertiary d-flex shadow-lg">
        <div className="container-fluid">
            <Link to={'/'} className="navbar-brand h1">SUPPORT DESK</Link>
            <span>
                {!user ? (
                  <>
                    <Link to={'/register'} type="button" className="btn btn-dark rounded-0 btn-sm ">Register</Link>
                    <Link to={'/login'} type="button" className="btn btn-dark rounded-0 mx-2 btn-sm">Login</Link>
                  </>
                ):
                  <button onClick={handleLogout} type="button" className="btn btn-danger rounded-0 btn-sm">Logout</button>
                }
            </span>
        </div>
</nav>
  )
}

export default Navbar