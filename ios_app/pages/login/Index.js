import React, {Component} from 'react';
import {Text, View, TextInput, Button} from 'react-native';
import loginStyle from './Style.js';
// import commonStyles from '../../styles/commonStyle';
import LoginModel from '../../models/login';
import MD5 from 'react-native-md5';
import stroge from '../../utils/localstroge';
const loginModel = new LoginModel();
export default class LoginIndex extends Component {
  //构造函数
  constructor(props) {
    super(props);
    this.state = {userName: '', password: ''};
  }
  // 登录接口
  loginTo() {
    loginModel
      .loginInAction({
        accountNumber: this.state.userName,
        password: MD5.hex_md5(this.state.password),
      })
      .then(res => {
        console.log(res.data.token);
        stroge.save({
          key: 'loginToken', // 注意:请不要在key中使用_下划线符号!
          data: {
            token: res.data.token,
          },
          // 如果不指定过期时间，则会使用defaultExpires参数
          // 如果设为null，则永不过期
          expires: 1000 * 3600,
        });
      });
  }
  // 测试需要token的接口
  getList() {
    loginModel
      .listAction({
        id: '6',
        pn: 1,
        ps: 10,
      })
      .then(res => {
        console.log('test');
      });
  }
  testGet() {
    loginModel.getAAction().then(res => {
      console.log('testGET', res);
    });
  }
  render() {
    return (
      <View style={loginStyle.loginContent}>
        <Text style={loginStyle.loginConet}> 彩云智享档案管理平台 </Text>
        <View style={loginStyle.inputView}>
          <Text>用户名：</Text>
          <TextInput
            style={loginStyle.loginInput}
            placeholder="请输入用户名"
            autoCapitalize="none"
            onChangeText={userName => this.setState({userName})}
          />
        </View>
        <View style={loginStyle.inputView}>
          <Text>密 码：</Text>
          <TextInput
            style={loginStyle.loginInput}
            placeholder="请输入密码"
            autoCapitalize="none"
            onChangeText={password => this.setState({password})}
          />
        </View>
        <View>
          <Button
            style={loginStyle.loginBtn}
            onPress={this.loginTo.bind(this)}
            title="点击登录"
          />
          <Button
            style={loginStyle.loginBtn}
            onPress={this.getList.bind(this)}
            title="test"
          />
          <Button
            style={loginStyle.loginBtn}
            onPress={this.testGet.bind(this)}
            title="get接口测试按钮"
          />
        </View>
      </View>
    );
  }
}
