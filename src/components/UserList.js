import React, {useContext, useEffect, useState} from 'react'
import Axios from 'axios'
import Card from './Card'

import '../style.css'
import {UserContext} from '../contexts/UserContext'

// https://randomuser.me/api/?resuslts=5

const UserList = () => {
  const users = useContext(UserContext)

  return (
    <div className="card-container">
      {users.map((user) => {
        return <Card user={user} key={user.login.uuid} />
      })}
    </div>
  )
}

export default UserList
