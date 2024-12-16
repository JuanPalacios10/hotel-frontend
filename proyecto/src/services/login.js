import axios from 'axios'
import { BACKURL } from '../constants/backendUrl'
import { formatData } from '../utilities/formatData'
import { LOGIN_FIELDS } from '../constants/DBFields'

export const login = async (data) => {
  return await axios.post(`${BACKURL}/login/token`, formatData(data, LOGIN_FIELDS))
}
