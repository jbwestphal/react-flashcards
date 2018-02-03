import React from 'react'
import styled from 'styled-components/native'
import { View, ScrollView, Text, TouchableOpacity, Platform, StyleSheet } from 'react-native'
import { white, gray, purple } from '../utils/colors'

export default function Home({ navigation }) {

  return (
    <ScrollView style={{flex:1}}>
      <TouchableOpacity
        style={styles.item}
        onPress={() => navigation.navigate('Deck', { title: 'React Quiz' })}
        >
        <Text style={styles.deckTitle}>React Quiz</Text>
        <Text style={styles.deckDescr}>5 cards</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.item}
        onPress={() => navigation.navigate('Deck', { title: 'Redux Quiz' })}
        >
        <Text style={styles.deckTitle}>Redux Quiz</Text>
        <Text style={styles.deckDescr}>3 cards</Text>
      </TouchableOpacity>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  headerTitle: {
    paddingTop: 20,
    paddingBottom: 20,
    fontSize: 20,
    color: purple,
    textAlign: 'center'
  },
  item: {
    backgroundColor: white,
    borderRadius: Platform.OS === 'ios' ? 16 : 2,
    padding: 20,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 17,
    justifyContent: 'center',
    shadowRadius: 3,
    shadowOpacity: 0.8,
    shadowColor: 'rgba(0, 0, 0, 0.24)',
    shadowOffset: {
      width: 0,
      height: 3
    },
  },
  deckTitle: {
    textAlign: 'center',
    fontSize: 17
  },
  deckDescr: {
    textAlign: 'center',
    fontSize: 14,
    color: gray
  }
})