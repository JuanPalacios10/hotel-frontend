import axios from 'axios'
import { BACKURL } from '../constants/backendUrl'
import { RECOVER_FIELDS } from '../constants/DBFields'
import { formatData } from '../utilities/formatData'

export const recuperarContra = async (data) => {
  return await axios.post(`${BACKURL}/login/recuperar_contraseña`, formatData(data, RECOVER_FIELDS))
}
