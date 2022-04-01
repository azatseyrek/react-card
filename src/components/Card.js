/* eslint-disable react/prop-types */
import React, {useReducer} from 'react'
import {LikeReducer} from '../reducer/LikeReducer'
import '../style.css'

const Card = ({user}) => {
  // const initialState = {count: 0}
  const [like, dispatch] = useReducer(LikeReducer, {count: 0})
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

        <button onClick={() => dispatch({type: 'decrement'})}>Dislike</button>
        <button onClick={() => dispatch({type: 'increment'})}>Like</button>
        <p>Likes: {like.count}</p>
      </div>
    </div>
  )
}

export default Card
