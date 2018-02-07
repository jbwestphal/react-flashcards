import React from 'react'
import { View, Text, KeyboardAvoidingView, StyleSheet } from 'react-native'
import { FormInput, FormValidationMessage } from 'react-native-elements'
import { gray } from '../utils/colors'
import SubmitBtn from './SubmitBtn'
import If from './If'

export default class AddDeck extends React.Component {

  state = {
    showError: false,
    text: ''
  }

  inputVal = () => {

  }

  submitDeck = () => {
    if( this.state.text === '' ) {
      this.setState({
        showError: true
      })
    } else {
      this.setState({
        showError: false
      })
      console.log(this.state.text)
    }
  }

  render() {

    const { navigation } = this.props
    const { showError } = this.state

    return (
      <KeyboardAvoidingView behavior='padding' style={styles.center}>
        <Text style={styles.title}>Create a new Deck</Text>
        <View>
          <FormInput containerStyle={styles.inputWrapper} inputStyle={styles.input} onChangeText={(text) => this.setState({text})} ref={input => this.input = input} />
        </View>
        <If test={ showError === true }>
          <FormValidationMessage labelStyle={styles.errorMsg}>Insert a title</FormValidationMessage>
        </If>
        <SubmitBtn text={'SUBMIT'} onPress={this.submitDeck} />
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
    fontSize: 26,
    textAlign: 'center',
    marginBottom: 20
  },
  errorMsg: {
    fontSize: 16,
    marginBottom: 20
  },
  inputWrapper: {
    marginLeft: 0,
    marginRight: 0,
    marginBottom: 15
  },
  input: {
    margin: 0,
    height: 40,
    color: gray,
  }

})