/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
// 以下这段代码是为了在谷歌浏览器中的network可以看到fetch请求
global.XMLHttpRequest = global.originalXMLHttpRequest || global.XMLHttpRequest;
global.FormData = global.originalFormData || global.FormData;
if (window.FETCH_SUPPORT) {
  window.FETCH_SUPPORT.blob = false;
} else {
  global.FileReader = global.originalFileReader || global.FileReader;
  // eslint-disable-next-line no-undef
  GLOBAL.Blob = null;
}
// 注册app
AppRegistry.registerComponent(appName, () => App);
