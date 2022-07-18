import _axios from '../config/axios'
/**
 * 用户接口
 */

const userAPI = {
  text(params){
    return _axios.get('/user', params)
  }
}

export default userAPI