import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';

const SignUpForm = () => {
  const [passwordStrength, setPasswordStrength] = useState<string>('');

  // Password strength indicator logic
  const passwordStrengthIndicator = (password: string) => {
    if (password.length < 6) {
      setPasswordStrength('Weak');
    } else if (password.length < 10) {
      setPasswordStrength('Medium');
    } else {
      setPasswordStrength('Strong');
    }
  };

  // Validation schema using Yup
  const signUpSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email address').required('Email is required'),
    password: Yup.string().min(6, 'Password too short').required('Password is required'),
  });

  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      validationSchema={signUpSchema}
      onSubmit={() => alert('Sign Up Successful')}
    >
      {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
        <View style={styles.container}>
          <Text style={styles.title}>Sign Up</Text>
          
          <Text style={styles.label}>Email</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your email"
            onChangeText={handleChange('email')}
            onBlur={handleBlur('email')}
            value={values.email}
          />
          {touched.email && errors.email && <Text style={styles.error}>{errors.email}</Text>}

          <Text style={styles.label}>Password</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your password"
            secureTextEntry
            onChangeText={(text) => {
              handleChange('password')(text);
              passwordStrengthIndicator(text);
            }}
            onBlur={handleBlur('password')}
            value={values.password}
          />
          {touched.password && errors.password && <Text style={styles.error}>{errors.password}</Text>}

          <Text style={styles.strength}>
            Password Strength: <Text style={styles[passwordStrength.toLowerCase()]}>{passwordStrength}</Text>
          </Text>

          <View style={styles.buttonContainer}>
            <Button onPress={handleSubmit} title="Sign Up " color="#007BFF" />
          </View>
        </View>
      )}
    </Formik>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 25,
    backgroundColor: '#f8f9fa',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#333',
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
    color: '#555',
  },
  input: {
    height: 45,
    borderColor: '#ced4da',
    borderWidth: 1,
    borderRadius: 5,
    paddingLeft: 10,
    marginBottom: 15,
    backgroundColor: '#ffffff',
  },
  error: {
    color: '#dc3545',
    marginBottom: 10,
  },
  strength: {
    fontSize: 14,
    marginBottom: 20,
  },
  weak: {
    color: '#dc3545',
  },
  medium: {
    color: '#ffc107',
  },
  strong: {
    color: '#28a745',
  },
  buttonContainer: {
    marginTop: 20,
    borderRadius: 5,
    overflow: 'hidden',
  },
});

export default SignUpForm;
