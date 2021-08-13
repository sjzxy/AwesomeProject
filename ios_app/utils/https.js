// 网络fetch请求封装文件
// 测试封装get接口？？？？待写
import stroge from './localstroge';
const queryString = require('query-string');
export default class HTTP {
  constructor() {
    this.header = {
      'Content-Type': 'application/x-www-form-urlencoded',
    };
  }
  async fetchCommon(options) {
    // console.log(ApiModule.isDebug)
    await getToken().then(ret => {
      this.header.token = ret; // 默认的header添加token
    });
    if (options.headers) {
      await getToken().then(ret => {
        options.headers.token = ret; // 自定义的header添加token
      });
    }
    return fetch(convertUrl(options.url, options.params, options.method), {
      method: options.method ? options.method : 'POST',
      headers: options.headers ? options.headers : this.header,
      body: convertBody(options.params, options.method),
    })
      .then(response => response.json())
      .then(responseJson => {
        options.success(responseJson);
      })
      .catch(error => {
        options.error(error);
      });
  }
}
// 获取登录后的全局token放在每个请求头中
async function getToken() {
  var token = null;
  await stroge
    .load({
      key: 'loginToken',
    })
    .then(res => {
      token = res.token;
    })
    .catch(err => {
      console.log(err);
    });
  return token;
}
//  convertUrl 用来区分get和post
function convertUrl(url, params = {}, method = 'POST') {
  let realUrl =
    method === 'GET'
      ? url + '?' + queryString.stringify(Object.assign({}, params))
      : url;

  return realUrl;
}
//  convertBody 用来区分get和post
function convertBody(params, method = 'POST') {
  return method === 'GET' ? undefined : JSON.stringify(params);
}
