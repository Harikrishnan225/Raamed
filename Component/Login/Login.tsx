import React from 'react';
import {
  TouchableOpacity,
  Text,
  View,
  StyleSheet,
  Image,
  TextInput,
  Alert,
} from 'react-native';
import {useFormik} from 'formik';
import * as Yup from 'yup';

const Login = ({navigation}: {navigation: any}) => {
  const formik = useFormik({
    initialValues: {
      emailorphone: '',
      password: '',
    },
    validationSchema: Yup.object().shape({
      emailorphone: Yup.string()
        .email('Invalid Email')
        .required('EmailorPhone is required'),
      password: Yup.string().required('Password is required'),
    }),
    onSubmit: values => {
      console.log(values);
    },
  });

  const alert = () => {
    Alert.alert('Trying to Login');
  };
  return (
    <View style={styles.container}>
      <Image
        source={require('../../assert/raamedlogo.jpg')}
        style={styles.logo}
      />
      <View style={styles.background}>
        {/* logininputs */}
        <View>
          <Text style={styles.heading}>Login Now</Text>
          <Text style={styles.subheading}>Please login to continue</Text>
        </View>

        <View style={{marginBottom: 15}}>
          <TextInput
            style={styles.input}
            placeholder="Email or Phone"
            onChangeText={formik.handleChange('emailorphone')}
            onBlur={formik.handleBlur('emailorphone')}
            value={formik.values.emailorphone}
          />
          {formik.touched.emailorphone && formik.errors.emailorphone && (
            <Text style={{color: 'red'}}>{formik.errors.emailorphone}</Text>
          )}
        </View>
        <View style={{marginBottom: 10}}>
          <TextInput
            style={styles.input}
            placeholder="Password"
            onChangeText={formik.handleChange('password')}
            onBlur={formik.handleBlur('password')}
            value={formik.values.password}
          />
          {formik.touched.password && formik.errors.password && (
            <Text style={{color: 'red'}}>{formik.errors.password}</Text>
          )}
        </View>

        {/* forgotpassword */}
        <View style={{marginBottom: 15, alignItems: 'flex-end'}}>
          <TouchableOpacity
            onPress={() => navigation.navigate('ForgotPassword')}>
            <Text
              style={{
                color: 'white',
                fontSize: 20,
                textDecorationLine: 'underline',
              }}>
              Forgot Password?
            </Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.loginButton} onPress={alert}>
          <Text style={{fontSize: 16}}>Login</Text>
        </TouchableOpacity>

        {/* registration */}
        <View
          style={{
            marginTop: 10,
            alignItems: 'flex-end',
            flexDirection: 'row',
            justifyContent: 'center',
            marginBottom: 25,
          }}>
          <Text style={{fontSize: 20, color: 'white'}}>
            Don't have an Account?
          </Text>
          <TouchableOpacity
            onPress={() => navigation.navigate('AccountCreation')}>
            <Text
              style={{
                color: 'white',
                fontSize: 20,
                textDecorationLine: 'underline',
              }}>
              {'\u00A0'}
              Register now
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: '#ffffff',
  },
  input: {
    width: '100%',
    height: 50,
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    fontSize: 15,
  },
  background: {
    width: '100%',
    backgroundColor: '#0080FF',
    borderRadius: 12,
    padding: 20,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  heading: {
    fontSize: 24,
    color: 'white',
  },
  subheading: {
    fontSize: 18,
    color: 'white',
    marginBottom: 20,
  },
  logo: {
    width: '100%',
    height: undefined,
    aspectRatio: 2,
    resizeMode: 'contain',
    marginVertical: 30,
    alignSelf: 'center',
  },
  loginButton: {
    width: '100%',
    height: 50,
    backgroundColor: 'white',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Login;
