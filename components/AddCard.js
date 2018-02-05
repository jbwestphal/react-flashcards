import React from 'react'
import { View, Text, KeyboardAvoidingView, StyleSheet } from 'react-native'
import { FormInput, FormValidationMessage } from 'react-native-elements'
import { gray } from '../utils/colors'
import SubmitBtn from './SubmitBtn'

export default function AddCard({ navigation }) {
  return (
    <KeyboardAvoidingView style={styles.center}>
      <Text style={styles.title}>Title Card</Text>
      <View style={styles.inputWrapper}><FormInput /></View>
      <FormValidationMessage>error message</FormValidationMessage>
      <Text style={styles.title}>Anwser Card</Text>
      <View style={styles.inputWrapper}><FormInput /></View>
      <FormValidationMessage>error message</FormValidationMessage>
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
    fontSize: 18,
    color: gray
  },
  inputWrapper: {
    marginBottom: 20
  }

})