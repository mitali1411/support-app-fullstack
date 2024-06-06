import React, { useEffect, useState } from 'react'
import BackBtn from '../components/BackBtn'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { toast } from 'react-toastify'
import { closeComplaint, getAllComplaint } from '../providers/Complaint/complaintSlice'
import CommentBox from '../components/CommentBox'


const ComplaintDetails = () => {

  const {isLoading, complaint, isError, isSuccess, message} = useSelector((state)=> state.complaint)

  const dispatch = useDispatch()
  const {id} = useParams()


  const handleClose = () => {
    dispatch(closeComplaint(id))
  };



  useEffect(()=>{
    dispatch(getAllComplaint(id));
    if(isError){
      toast.error(message);
    }
  },[isError, message]);

  if(isLoading){
    return(
      <h1 className='text-secondary display-1 text-center'>Loading...</h1>
    )
  }

  return (
    <div className='container p-5 d-flex align-item-center justify-content-center'>
      <div className="card p-4 rounded-0 shadow w-100">
        <BackBtn url={'/auth/all'}/>
        <h2 className="text-center text-secondary my-3">YOUR COMPLAINT</h2>
        <p className='my-2 text-secondary'>PRODUCT NAME : <b className='text-warning'>{complaint.product}</b></p>
        <p className='my-2 text-secondary'>DESCRIPTION : <b className='text-warning'>{complaint.description}</b></p>
        <p className='my-2 text-secondary'>DATE : <b className='text-warning'>{new Date(complaint.createdAt).toLocaleDateString('en-IN')}</b></p>
        <p className='my-2 text-secondary'>STATUS : <span className={complaint.status === 'new' ? "badge text-bg-success" : "badge text-bg-danger"}>{complaint.status}</span></p>

        <CommentBox/>
          
        <button className="btn btn-danger rounded-0 w-100 my-3" onClick={()=>handleClose(id)} disabled={complaint.status === 'close' ? true : false}>Close Complaint</button>
      </div>
    </div>
  )
}

export default ComplaintDetails