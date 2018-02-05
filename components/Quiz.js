import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { gray, purple, orange } from '../utils/colors'

export default function Quiz({ navigation }) {
  return (
    <View style={styles.center}>
      <Text style={styles.pager}>1/2</Text>
      <View style={styles.deckContent}>
        <Text style={styles.title}>What are components in React?</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Answer')}><Text style={styles.link}>Answer</Text></TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  center: {
    flex: 1,
    margin: 30,
    justifyContent: 'space-between'
  },
  pager: {
    fontSize: 18,
    color: purple
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