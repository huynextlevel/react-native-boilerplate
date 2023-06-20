import axios from 'axios'

import { API_URL } from 'src/utils'

const login = (values: any) => {
  return axios.post(`${API_URL}/login`, values)
}

const apis = {
  login
}

export default apis
