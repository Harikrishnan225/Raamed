import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {useFormik} from 'formik';
import * as Yup from 'yup';

const AccountCreation = ({navigation}: {navigation: any}) => {
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      phoneNumber: '',
      password: '',
      confirmPassword: '',
    },
    validationSchema: Yup.object().shape({
      firstName: Yup.string()
        .min(2, 'Too Short')
        .max(20, 'Too Long')
        .required('First Name is required'),
      lastName: Yup.string()
        .min(2, 'Too Short')
        .max(20, 'Too Long')
        .required('Last Name is required'),
      email: Yup.string().email('Invalid Email').required('Email is required'),
      phoneNumber: Yup.string().required('Phone Number is required'),
      password: Yup.string().required('Password is required'),
      confirmPassword: Yup.string().required('Confirm Password is required'),
    }),
    onSubmit: values => {
      console.log(values);
    },
  });
  return (
    <ScrollView>
      {/* logoimage */}
      <Image
        source={require('../../assert/raamedlogo.jpg')}
        style={styles.logo}
      />

      <View style={styles.backgroungcard}>
        <Text style={styles.heading}>Register Now</Text>
        <Text style={styles.subheading}>
          Please fill the details to Register
        </Text>
        {/* firstname */}
        <View style={styles.inputViewContainer}>
          <TextInput
            style={styles.input}
            placeholder="First Name"
            onChangeText={formik.handleChange('firstName')}
            onBlur={formik.handleBlur('firstName')}
            value={formik.values.firstName}
          />
          {formik.touched.firstName && formik.errors.firstName && (
            <Text style={{color: 'red'}}>{formik.errors.firstName}</Text>
          )}
        </View>

        {/* lastname */}
        <View style={styles.inputViewContainer}>
          <TextInput
            style={styles.input}
            placeholder="Last Name"
            onChangeText={formik.handleChange('lastName')}
            onBlur={formik.handleBlur('lastName')}
            value={formik.values.lastName}
          />
          {formik.touched.lastName && formik.errors.lastName && (
            <Text style={{color: 'red'}}>{formik.errors.lastName}</Text>
          )}
        </View>

        {/* emailaddress */}
        <View style={styles.inputViewContainer}>
          <TextInput
            style={styles.input}
            placeholder="Email Address"
            onChangeText={formik.handleChange('email')}
            onBlur={formik.handleBlur('email')}
            value={formik.values.email}
          />
          {formik.touched.email && formik.errors.email && (
            <Text style={{color: 'red'}}>{formik.errors.email}</Text>
          )}
        </View>
        {/* phonenumber */}
        <View style={styles.inputViewContainer}>
          <TextInput
            keyboardType={'phone-pad'}
            style={styles.input}
            placeholder="Phone Number"
            onChangeText={formik.handleChange('phoneNumber')}
            onBlur={formik.handleBlur('phoneNumber')}
            value={formik.values.phoneNumber}
          />
          {formik.touched.phoneNumber && formik.errors.phoneNumber && (
            <Text style={{color: 'red'}}>{formik.errors.phoneNumber}</Text>
          )}
        </View>

        {/* password */}
        <View style={styles.inputViewContainer}>
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
        {/* confirm password */}
        <View style={styles.inputViewContainer}>
          <TextInput
            style={styles.input}
            placeholder="Confirm Password"
            onChangeText={formik.handleChange('confirmPassword')}
            onBlur={formik.handleBlur('confirmPassword')}
            value={formik.values.confirmPassword}
          />
          {formik.touched.confirmPassword && formik.errors.confirmPassword && (
            <Text style={{color: 'red'}}>{formik.errors.confirmPassword}</Text>
          )}
        </View>

        <View style={styles.termsContainer}>
          <Text style={{color: 'white', fontSize: 18}}>
            By registering you agree to the
            {'\u00A0'}
            <TouchableOpacity style={{marginVertical: 5}}>
              <Text style={{color: 'white', textDecorationLine: 'underline'}}>
                T&C
                {'\u00A0'}
              </Text>
            </TouchableOpacity>
            and
            {'\u00A0'}
            <TouchableOpacity style={{marginVertical: 8}}>
              <Text style={{color: 'white', textDecorationLine: 'underline'}}>
                Privacy policy
              </Text>
            </TouchableOpacity>
          </Text>
        </View>

        {/* registerButton */}
        <TouchableOpacity style={styles.registerButton}>
          <Text style={{color: '#0080FF', fontSize: 16}}>Register</Text>
        </TouchableOpacity>

        <View style={styles.buttonContainer}>
          <Text style={{color: 'white', fontSize: 18}}>
            Already have an Account?
            {'\u00A0'}
            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
              <Text
                style={{
                  color: 'white',
                  textDecorationLine: 'underline',
                  fontSize: 18,
                }}>
                Click Here
              </Text>
            </TouchableOpacity>
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    padding: 20,
  },
  logo: {
    width: '100%',
    height: undefined,
    aspectRatio: 2,
    resizeMode: 'contain',
    marginVertical: 30,
    alignSelf: 'center',
  },
  backgroungcard: {
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
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  halfInput: {
    width: '48%',
  },
  inputViewContainer: {
    marginBottom: 15,
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
  registerButton: {
    width: '100%',
    height: 50,
    backgroundColor: 'white',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
  },
  buttonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  termsContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10,
    marginBottom: 10,
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
});

export default AccountCreation;
