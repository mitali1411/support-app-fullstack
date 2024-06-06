import React, { useEffect } from 'react'
import BackBtn from '../components/BackBtn'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getAllComplaints } from '../providers/Complaint/complaintSlice'
import ComplaintRow from '../components/ComplaintRow'

const AllComplaints = () => {
  const {complaints} = useSelector((state) => state.complaint)
  const dispatch = useDispatch()
  
  useEffect(()=>{
    dispatch(getAllComplaints())
  },[])

  return (
    <div className='container p-5'>
      <div className="card p-4 rounded-0 shadow">
        <BackBtn url={'/'}/>
        <br />
        <h2 className='text-center'>ALL COMPLAINTS</h2>
        <br />
        <table className='table mt-2'>
          <thead>
            <tr>
              <th scope='col'>S.No.</th>
              <th scope='col'>Product</th>
              <th scope='col'>Date</th>
              <th scope='col'>Status</th>
              <th scope='col'></th>
            </tr>
          </thead>

          <tbody>
            {complaints.map((complaint, index) => (<ComplaintRow key={complaint._id} complaint={complaint} sno={index}/> ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default AllComplaints