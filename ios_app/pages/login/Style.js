import {StyleSheet} from 'react-native';

const loginStyle = StyleSheet.create({
  loginContent: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#f0f8ff',
  },
  loginConet: {
    fontSize: 30,
    color: '#000',
    marginTop: 150,
    textAlign: 'center',
  },
  loginInput: {
    width: '70%',
    height: 35,
    borderColor: 'gray',
    borderWidth: 1,
  },
  inputView: {
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 30,
  },
  inputTips: {
    width: 30,
    textAlign: 'right',
  },
  // loginBtn: {
  //   fontSize: 30,
  //   fontWeight: 'blod',
  //   borderWidth: 1,
  // },
});

export default loginStyle;
