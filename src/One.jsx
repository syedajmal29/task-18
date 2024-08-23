import React from 'react'
import { Link } from 'react-router-dom'
import Card from './Card'
function One({users,handleDel}) {
  return (
    <div>
       <div className="heading text-center">
 <Link to={"/add"} className='btn btn-warning m-4'>Add</Link>

 <div className="container-fluid">
   { users.map((user)=>(
 <Card key={user.id} users={user} deleteuser={handleDel}/>
   ))
    }
     </div>
     </div>
    </div>
  )
}

export default One