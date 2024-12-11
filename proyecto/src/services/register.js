import axios from 'axios'
import { BACKURL } from '../constants/backendUrl'
import { formatRegisterData } from '../utilities/formatData'

export const register = async (data) => {
  return axios.post(`${BACKURL}/login/register`, formatRegisterData(data))
}
