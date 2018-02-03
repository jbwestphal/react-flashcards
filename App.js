import React from 'react'
import { View, Platform, StatusBar } from 'react-native'
// import { createStore } from 'redux'
// import { Provider } from 'react-redux'
// import reducer from './reducers'
import { StackNavigator } from 'react-navigation'

import { FontAwesome, Ionicons } from '@expo/vector-icons'
import { Constants } from 'expo'
import { white, purple } from './utils/colors'

import Home from './components/Home'
import Deck from './components/Deck'
import AddDeck from './components/AddDeck'
import AddCard from './components/AddCard'

function CustomStatusBar ({backgroundColor, ...props}) {
  return (
    <View style={{ backgroundColor, height: Constants.statusBarHeight }}>
      <StatusBar translucent backgroundColor={backgroundColor} {...props} />
    </View>
  )
}

const Nav = StackNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      title: 'Decks',
      headerTintColor: white,
      headerStyle: {
        backgroundColor: purple,
      }
    }
  },

  Deck: {
    screen: Deck,
    navigationOptions: {
      headerTintColor: white,
      headerStyle: {
        backgroundColor: purple,
      }
    }
  },
  AddDeck: {
    screen: AddDeck,
    navigationOptions: {
      title: 'Add new Deck',
      headerTintColor: white,
      headerStyle: {
        backgroundColor: purple,
      }
    }
  },
  AddCard: {
    screen: AddCard,
    navigationOptions: {
      title: 'Add new Card',
      headerTintColor: white,
      headerStyle: {
        backgroundColor: purple,
      }
    }
  },
})

export default class App extends React.Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <CustomStatusBar backgroundColor={purple} barStyle="light-content" />
        <Nav />
      </View>
    )
  }
}