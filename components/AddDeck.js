import React from 'react'
import { View, Text, KeyboardAvoidingView, StyleSheet } from 'react-native'
import { FormInput, FormValidationMessage } from 'react-native-elements'
import { gray } from '../utils/colors'
import SubmitBtn from './SubmitBtn'

export default function AddDeck({ navigation }) {
  return (
    <KeyboardAvoidingView behavior='padding' style={styles.center}>
      <Text style={styles.title}>What is the title of your new deck?</Text>
      <View><FormInput containerStyle={styles.inputWrapper} inputStyle={styles.input} /></View>
      <FormValidationMessage>Insert a title</FormValidationMessage>
      <SubmitBtn text={'SUBMIT'} onPress={() => navigation.navigate('Home')} />
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  center: {
    flex: 1,
    margin: 30,
  },
  title: {
    fontSize: 26,
    textAlign: 'center',
    marginBottom: 20
  },
  inputWrapper: {
    marginLeft: 0,
    marginRight: 0,
    marginBottom: 10
  },
  input: {
    margin: 0,
    height: 40,
    color: gray,
  }

})