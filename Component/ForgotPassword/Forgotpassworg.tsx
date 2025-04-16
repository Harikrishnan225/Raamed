import React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {useFormik} from 'formik';
import * as Yup from 'yup';

const Forgotpassword = ({navigation}: {navigation: any}) => {
  const formik = useFormik({
    initialValues: {
      email: '',
    },
    validationSchema: Yup.object().shape({
      email: Yup.string().email('Invalid email').required('Email is requied'),
    }),
    onSubmit: values => {
      console.log(values);
    },
  });
  return (
    <View style={styles.container}>
      <Image
        source={require('../../assert/raamedlogo.jpg')}
        style={styles.logo}
      />

      <View style={styles.background}>
        <View style={{marginTop: 20}}>
          <Text style={styles.heading}>Forgot Password</Text>
          <Text style={styles.subheading}>
            Enter your email address associated with your account and we will
            send you a link to reset your password
          </Text>
        </View>
        {/* forgot password input field */}
        <View style={{marginBottom: 15}}>
          <TextInput
            style={styles.input}
            placeholder="Enter Email"
            onChangeText={formik.handleChange('email')}
            onBlur={formik.handleBlur('email')}
            value={formik.values.email}
          />
          {formik.touched.email && formik.errors.email && (
            <Text style={{color: 'red'}}>{formik.errors.email}</Text>
          )}
        </View>
        <TouchableOpacity
          // onPress={() => navigation.navigate('Login')}
          style={styles.continueButton}>
          <Text style={{color: 'blue', fontSize: 18}}>Continue</Text>
        </TouchableOpacity>
        <View style={{flexDirection: 'row', marginBottom: 80}}>
          <Text style={{color: 'white', fontSize: 18}}>
            {' '}
            Already have a password?
          </Text>

          {/* navigation to loginscreen */}
          <TouchableOpacity
            onPress={() => navigation.navigate('Login')}
            style={{flexDirection: 'row'}}>
            <Text
              style={{
                color: 'white',
                textDecorationLine: 'underline',
                fontSize: 18,
              }}>
              Click here
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
  continueButton: {
    width: '100%',
    height: 50,
    backgroundColor: 'white',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
});

export default Forgotpassword;
