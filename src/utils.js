import Axios from 'axios'

export const fetchUsers = async (setMyState) => {
  const res = await Axios.get('https://randomuser.me/api/?results=6')

  setMyState(res.data.results)
}
