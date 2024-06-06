import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import BackBtn from '../components/BackBtn'
import { useNavigate } from 'react-router-dom';
import { raiseComplaint } from '../providers/Complaint/complaintSlice';
import { toast } from 'react-toastify';

const RaiseComplain = () => {

  const {user} = useSelector((state)=>state.auth);
  const {isError, isSuccess, message, complaint} = useSelector((state)=> state.complaint)
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [product, setProduct] = useState('iPad');
  const [description, setDescription] = useState();


  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(raiseComplaint({product, description}));
    navigate('/auth/all')
  };

  useEffect(()=> {

    if(isError){
      toast.error(message)
    }
  }, [isError, message])

  return (
    <div className='container p-5 d-flex align-item-center justify-content-center'>

      <div className="card p-5 rounded-0 shadow " style={{height:'550px', width:'470px'}}>
        <BackBtn url={'/'}/>
        <br />
        <h2 className='text-center'>RAISE COMPLAINT</h2>
        <p className='text-center text-secondary'>Please fill all details here!</p>

        <form className='my-2' onSubmit={handleSubmit}>
          <input type="text" name="name" className='form-control rounded-0 my-2' value={user.name} required disabled/>
          <input type="email" name="email" className='form-control rounded-0 my-2' value={user.email} required disabled/>

          <select className="form-select my-2 rounded-0" onChange={(e)=> setProduct(e.target.value)}>
            <option value="iPhone">iPhone</option>
            <option value="iPad">iPad</option>
            <option value="Macbook">Macbook</option>
            <option value="iMac">iMac</option>
            <option value="iWatch">iWatch</option>
          </select>

          <textarea placeholder="Enter Your Compaint In Description" className="rounded-0 form-control my-2" rows={3} onChange={(e)=>setDescription(e.target.value)}></textarea>
          <button className='btn btn-dark w-100 mt-2 rounded-0'>Raise Complaint</button>

        </form>
      </div>
    </div>
  )
}

export default RaiseComplain


