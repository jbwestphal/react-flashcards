import React from 'react'
import { View, Platform, StatusBar } from 'react-native'
// import { createStore } from 'redux'
// import { Provider } from 'react-redux'
// import reducer from './reducers'
import { StackNavigator } from 'react-navigation'

import { FontAwesome, Ionicons } from '@expo/vector-icons'
import { Constants } from 'expo'
import { purple } from './utils/colors'

import Decks from './components/Decks'

function CustomStatusBar ({backgroundColor, ...props}) {
  return (
    <View style={{ backgroundColor, height: Constants.statusBarHeight }}>
      <StatusBar translucent backgroundColor={backgroundColor} {...props} />
    </View>
  )
}

const Nav = StackNavigator({
  Decks: {
    screen: Decks,
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