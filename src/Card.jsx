import React from 'react'

const Card = ({users,deleteuser}) => {

   
    return (

        <div class="card m-4" style={{width: "24rem"}}>
        <div class="card-body text-center">
        <div class="card m-1 p-4">
  <h2>ID: {users.id}</h2>
  <p><strong>Name:</strong> {users.name}</p>
  <p><strong>Username:</strong> {users.username}</p>
  <p><strong>Email:</strong> {users.email}</p>
  <p><strong>Street:</strong> {users.address.street}</p>
  <p><strong>Suite:</strong> {users.address.suite}</p>
  <p><strong>City:</strong> {users.address.city}</p>
  <p><strong>Zipcode:</strong> {users.address.zipcode}</p>
  <p><strong>Geo (Lat):</strong> {users.address.geo.lat}</p>
  <p><strong>Geo (Lng):</strong> {users.address.geo.lng}</p>
  <p><strong>Phone:</strong> {users.phone}</p>
  <p><strong>Website:</strong> {users.website}</p>
  <p><strong>Company Name:</strong> {users.company.name}</p>
  <p><strong>CatchPhrase:</strong> {users.company.catchPhrase}</p>
  <p><strong>BS:</strong> {users.company.bs}</p>    
</div>
  <button class="btn btn-primary m-2">Edit</button>
  <button class="btn btn-outline-primary m-2" onClick={()=>deleteuser(users.id)}>Delete</button>
        </div>
      </div>
     
    )
}

export default Card