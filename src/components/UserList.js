import React, {useEffect, useState} from 'react'
import Axios from 'axios'
import Card from './Card'

import '../style.css'

// https://randomuser.me/api/?resuslts=5

const UserList = () => {
  const [users, setUsers] = useState([])

  const fetchUsers = () => {
    try {
      const res = fetch('https://randomuser.me/api/?results=6')
        .then((response) => response.json())
        .then((data) => setUsers(data.results))
    } catch (err) {
      console.log('user list can not get from the api')
    }
  }

  useEffect(() => {
    fetchUsers()
    console.log(users)
  }, [])

  return (
    <div className="card-container">
      {users.map((user) => {
        return <Card user={user} key={user.login.uuid} />
      })}
    </div>
  )
}

export default UserList
