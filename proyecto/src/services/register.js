import axios from 'axios'
import { BACKURL } from '../constants/backendUrl'
import { formatData } from '../utilities/formatData'
import { REGISTER_FIELDS } from '../constants/DBFields'

export const register = async (data) => {
  return axios.post(`${BACKURL}/login/register`, formatData(data, REGISTER_FIELDS))
}
