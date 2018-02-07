import React from 'react'
import { View, Text, KeyboardAvoidingView, StyleSheet, TextInput } from 'react-native'
import { FormInput, FormValidationMessage } from 'react-native-elements'
import { gray } from '../utils/colors'
import SubmitBtn from './SubmitBtn'

export default class AddCard extends React.Component {

  render() {

    const { navigation } = this.props
    const { entryId } = navigation.state.params

    return (
      <KeyboardAvoidingView behavior='padding' style={styles.center}>
        <Text style={styles.title}>Card's Title</Text>
        <TextInput style={styles.input} />
        <FormValidationMessage>error message</FormValidationMessage>
        <Text style={styles.title}>Card's Answer</Text>
        <View style={styles.inputWrapper}><FormInput /></View>
        <FormValidationMessage>error message</FormValidationMessage>
        <SubmitBtn text={'SUBMIT'} onPress={() => navigation.navigate('Home')} />
      </KeyboardAvoidingView>
    )
  }
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
  },
  input: {
    height: 40,
    fontSize: 17,
    borderWidth: 1,
    width: 200
  }

})