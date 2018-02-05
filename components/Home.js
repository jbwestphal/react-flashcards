import React from 'react'
import { View, ScrollView, Text, TouchableOpacity, Platform, StyleSheet } from 'react-native'
import { white, gray, purple } from '../utils/colors'
import { fetchDecksList } from '../utils/_api'

export default class Home extends React.Component {

  state = {
    ready: false,
  }

  render() {

    const { navigation } = this.props

    return (
      <ScrollView style={{flex:1}}>

        {Object.keys(fetchDecksList).map((item) => {
          return (
            <TouchableOpacity
              style={styles.item}
              onPress={() => navigation.navigate('Deck', { title: item.title })}
              >
              <Text style={styles.deckTitle}>{ item.title }</Text>
              <Text style={styles.deckDescr}>{ item.questions.length }</Text>
            </TouchableOpacity>
          )
        })}
      </ScrollView>
    )
  }

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