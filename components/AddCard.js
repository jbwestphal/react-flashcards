import React from 'react'
import { NavigationActions } from 'react-navigation'
import { View, Text, KeyboardAvoidingView, StyleSheet, TextInput } from 'react-native'
import { FormInput, FormValidationMessage } from 'react-native-elements'
import { submitNewCard } from '../utils/_api'
import { gray, green } from '../utils/colors'
import SubmitBtn from './SubmitBtn'
import If from './If'

export default class AddCard extends React.Component {

  static navigationOptions = ({ navigation }) => {
    const { entryId } = navigation.state.params

    return {
      title: entryId+' > New Card'
    }
  }

  state = {
    showError: false,
    showSuccess: false,
    question: '',
    answer: ''
  }

  submitNewCard = () => {

    const { navigation } = this.props
    const { entryId, cards } = navigation.state.params
    const { question, answer } = this.state

    if( question === '' || answer === '' ) {
      this.setState({
        showError: true
      })
    } else {
      this.setState({
        showError: false
      })

      const card = {
        question,
        answer
      }

      submitNewCard(entryId, card)
        .then((result) => {
          this.setState({showSuccess: true})
          setTimeout(() => {
            navigation.dispatch(NavigationActions.reset({
              index: 1,
              actions: [
                NavigationActions.navigate({ routeName: 'Home' }),
                NavigationActions.navigate({
                  routeName: 'Deck',
                  params: {
                    title: entryId
                  }
                })
              ]
            }));
          }, 200);
        })
    }
  }

  render() {

    const { navigation } = this.props
    const { entryId } = navigation.state.params
    const { showError, showSuccess } = this.state

    return (
      <KeyboardAvoidingView behavior='padding' style={styles.center}>
        <Text style={styles.title}>Card Title</Text>

        <View>
          <FormInput containerStyle={styles.inputWrapper} inputStyle={styles.input} onChangeText={(question) => this.setState({question})} ref={input => this.input = input} />
        </View>

        <Text style={styles.title}>Card Answer</Text>
        <View>
          <FormInput containerStyle={styles.inputWrapper} inputStyle={styles.input} onChangeText={(answer) => this.setState({answer})} ref={input => this.input = input} />
        </View>

        <If test={ showError === true }>
          <FormValidationMessage labelStyle={styles.errorMsg}>Fill the required inputs</FormValidationMessage>
        </If>
        <If test={ showSuccess === true }>
          <FormValidationMessage labelStyle={styles.successMsg}>Card added with success.</FormValidationMessage>
        </If>

        <SubmitBtn text={'SUBMIT'} onPress={this.submitNewCard} />
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