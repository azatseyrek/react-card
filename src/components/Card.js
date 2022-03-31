/* eslint-disable react/prop-types */
import React from 'react'
import '../style.css'

const Card = ({user}) => {
  return (
    <div className="card">
      <div className="card-image">
        <img src={user.picture.large} alt="" />
      </div>
      <div className="card-info">
        <h1>
          {user.name.first} {user.name.last}
        </h1>

        <h2>{user.email}</h2>
        <h3>
          {user.location.city} || {user.location.country}
        </h3>
      </div>
    </div>
  )
}

export default Card
