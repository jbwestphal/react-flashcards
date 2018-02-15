import React from 'react'
import { View, Text, KeyboardAvoidingView, StyleSheet } from 'react-native'
import { FormInput, FormValidationMessage } from 'react-native-elements'
import { NavigationActions } from 'react-navigation'
import { submitNewDeck } from '../utils/_api'
import { gray, green } from '../utils/colors'
import SubmitBtn from './SubmitBtn'
import If from './If'

class AddDeck extends React.Component {

  state = {
    showError: false,
    showSuccess: false,
    deck: ''
  }

  submitDeck = () => {

    const { navigation } = this.props
    const { deck } = this.state

    if( deck === '' ) {
      this.setState({
        showError: true
      })
    } else {
      this.setState({
        showError: false
      })

      let key = deck;

      let entry = {
        title: deck,
        questions: []
      }

      submitNewDeck(entry)
      .then((result) => this.setState({showSuccess: true}))
      .then((result) => {
        setTimeout(() => {
          navigation.dispatch(NavigationActions.reset({
            index: 1,
            actions: [
              NavigationActions.navigate({ routeName: 'Home' }),
              NavigationActions.navigate({
                routeName: 'Deck',
                params: {
                  title: deck
                }
              })
            ]
          }));
        }, 200);
      })

    }
  }

  render() {

    const { showError, showSuccess } = this.state

    return (
      <KeyboardAvoidingView behavior='padding' style={styles.center}>
        <Text style={styles.title}>Create a new Deck</Text>
        <View>
          <FormInput containerStyle={styles.inputWrapper} inputStyle={styles.input} onChangeText={(deck) => this.setState({deck})} ref={input => this.input = input} />
        </View>
        <If test={ showError === true }>
          <FormValidationMessage labelStyle={styles.errorMsg}>Insert a title</FormValidationMessage>
        </If>
        <If test={ showSuccess === true }>
          <FormValidationMessage labelStyle={styles.successMsg}>Deck created with success.</FormValidationMessage>
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
  successMsg: {
    fontSize: 16,
    marginBottom: 20,
    color: green

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

export default AddDeck