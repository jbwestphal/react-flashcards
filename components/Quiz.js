import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { gray, purple, orange } from '../utils/colors'
import SubmitBtn from './SubmitBtn'

export default class Quiz extends React.Component {

  render() {

    const { navigation } = this.props
    const { entryId } = navigation.state.params

    return (
      <View style={styles.center}>
        <Text style={styles.pager}>1/2</Text>
        <View style={styles.deckContent}>
          <View style={styles.question}>
            <Text style={styles.title}>What are components in React?</Text>
            <TouchableOpacity><Text style={styles.link}>Answer</Text></TouchableOpacity>
          </View>
          <View style={styles.answer}>
            <Text style={styles.title}>Is the fundamental of React!</Text>
            <SubmitBtn text={'CORRECT'} />
            <SubmitBtn text={'INCORRECT'} />
          </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  center: {
    flex: 1,
    marginTop: 20,
    marginLeft: 30,
    marginRight: 30,
  },
  pager: {
    fontSize: 18,
    color: purple,
    marginBottom: 20
  },
  title: {
    fontSize: 26,
    marginBottom: 10,
    textAlign: 'center'
  },
  link: {
    fontSize: 18,
    textAlign: 'center',
    color: orange
  }
})