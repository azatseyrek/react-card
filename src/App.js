import React, {useEffect, useState} from 'react'
import UserList from './components/UserList'
import {UserContext} from './contexts/UserContext'
import {fetchUsers} from './utils'

const App = () => {
  const [users, setUsers] = useState([])

  useEffect(() => {
    fetchUsers(setUsers)
  }, [])

  return (
    <UserContext.Provider value={users}>
      <div>
        <UserList />
      </div>
    </UserContext.Provider>
  )
}

export default App
