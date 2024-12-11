import axios from 'axios'
import { BACKURL } from '../constants/backendUrl'
import { formatLoginData } from '../utilities/formatData'

export const login = async (data) => {
  return await axios.post(`${BACKURL}/login/token`, formatLoginData(data))
}
