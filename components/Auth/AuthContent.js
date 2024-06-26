// AuthContent logika dari login dan signup
import { Alert, StyleSheet, View, Text } from 'react-native';
import { useState } from 'react';

import FlatButton from '../ui/FlatButton';
import AuthForm from './AuthForm';
import { LinearGradient } from 'expo-linear-gradient';

function AuthContent({ isLogin, onAuthenticate }) {

  const [credentialsInvalid, setCredentialsInvalid] = useState({
    email: false,
    password: false,
    confirmEmail: false,
    confirmPassword: false,
  });

  const [Login, setLogin] = useState(isLogin? false: true)

  function switchAuthModeHandler() {
    // Todo
    setLogin((prevState) => !prevState)
  }

  function submitHandler(credentials) {
    let { email, confirmEmail, password, confirmPassword } = credentials;

    email = email.trim();
    password = password.trim();

    // rencananya emailsAreEqual mau dihapus
    const emailIsValid = email.includes('@');
    const passwordIsValid = password.length > 6; // password minimal 6 karakter
    const emailsAreEqual = email === confirmEmail;
    const passwordsAreEqual = password === confirmPassword;

    if (
      !emailIsValid ||
      !passwordIsValid ||
      (!isLogin && (!emailsAreEqual || !passwordsAreEqual))
    ) {
      Alert.alert('Invalid input', 'Please check your entered credentials.');
      setCredentialsInvalid({
        email: !emailIsValid,
        confirmEmail: !emailIsValid || !emailsAreEqual,
        password: !passwordIsValid,
        confirmPassword: !passwordIsValid || !passwordsAreEqual,
      });
      return;
    }
    onAuthenticate({ email, password });
  }

  return (
    <View style = {{flex:1, alignItems: 'center', justifyContent: 'center'}}>
    <LinearGradient style = {Login? styles.authContentLogin: styles.authContentSignin} start= {[0,0]} end= {[1,1]} colors={['#ADE8F4', '#4B87B7', '#155196','#023E8A']}>
      <View style = {styles.container}>
        <AuthForm
          isLogin={Login}
          onSubmit={submitHandler}
          credentialsInvalid={credentialsInvalid}
        />
        <View style={styles.buttons}>
          <FlatButton onPress={switchAuthModeHandler} text = {Login ? 'Belum punya akun?' : 'Sudah punya akun?'}>
              {Login ? 'Daftar' : 'Masuk kembali'}
          </FlatButton>
        </View>
      </View>
    </LinearGradient>
    </View>
  );
}

export default AuthContent;

const styles = StyleSheet.create({
  authContentLogin: {
    padding: 16,
    borderRadius: 20,
    elevation: 2,
    shadowColor: 'black',
    shadowOffset: { width: 10, height: 2 },
    shadowOpacity: 0.35,
    shadowRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    width: "80%",
    alignSelf: 'center',
    height: '50%',
  },
  authContentSignin: {
    padding: 16,
    borderRadius: 20,
    elevation: 2,
    shadowColor: 'black',
    shadowOffset: { width: 10, height: 2 },
    shadowOpacity: 0.35,
    shadowRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    width: "80%",
    alignSelf: 'center',
    height: '80%',
  },
  container: {
    flex: 1,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttons: {
    marginTop: 8,
    flexDirection: 'row',
  },
});
