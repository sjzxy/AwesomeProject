// 登录功能模块
import HTTP from '../utils/https';
import {API} from '../utils/config';
export default class LoginModel extends HTTP {
  // 登录接口
  loginInAction(params) {
    console.log(params);
    return new Promise((resolve, reject) => {
      this.fetchCommon({
        url: API.loginIn,
        headers: {'Content-Type': 'application/json'},
        params: params,
        success(data) {
          resolve(data);
        },
        error(data) {
          reject(data);
        },
      });
    });
  }
  // 测试token接口 post
  listAction(params) {
    return new Promise((resolve, reject) => {
      this.fetchCommon({
        url: API.list,
        headers: {'Content-Type': 'application/json'},
        params: params,
        success(data) {
          resolve(data);
        },
        error(data) {
          reject(data);
        },
      });
    });
  }
  // 测试token接口 get请求
  getAAction(params) {
    return new Promise((resolve, reject) => {
      this.fetchCommon({
        url: API.getA,
        method: 'GET',
        params: params,
        success(data) {
          resolve(data);
        },
        error(data) {
          reject(data);
        },
      });
    });
  }
}
