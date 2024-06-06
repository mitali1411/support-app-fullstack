import React from 'react'
import { Link } from 'react-router-dom'

const ComplaintRow = ({complaint, sno}) => {
  return (
    <tr>
        <th scope='row'>{sno+1}</th>
            <td>{complaint.product}</td>
            <td>{new Date(complaint.createdAt).toLocaleDateString('en-IN')}</td>
            <td><span className={complaint.status === 'new' ? "badge text-bg-success" : "badge text-bg-danger"}>{complaint.status}</span></td>
            <td>
              <Link to={`/auth/complaint/${complaint._id}`} className="btn btn-sm btn-dark">View <i className="fa-regular fa-eye"></i></Link>
        </td>
    </tr>
  )
}

export default ComplaintRow


{/* <i className="fa-regular fa-eye"></i> */}