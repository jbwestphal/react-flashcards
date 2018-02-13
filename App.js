import React from 'react'
import { View, Platform, StatusBar } from 'react-native'
import { TabNavigator, StackNavigator } from 'react-navigation'
// import { Provider } from 'react-redux'
// import store from './store'

import { FontAwesome, Ionicons } from '@expo/vector-icons'
import { Constants } from 'expo'
import { white, purple, lightPurp } from './utils/colors'

import Home from './components/Home'
import Deck from './components/Deck'
import AddDeck from './components/AddDeck'
import AddCard from './components/AddCard'
import Quiz from './components/Quiz'

function CustomStatusBar ({backgroundColor, ...props}) {
  return (
    <View style={{ backgroundColor, height: Constants.statusBarHeight }}>
      <StatusBar translucent backgroundColor={backgroundColor} {...props} />
    </View>
  )
}

// const TabsNav = TabNavigator({
//   Home: {
//     screen: Home,
//     navigationOptions: {
//       tabBarLabel: 'Decks',
//       tabBarIcon: ({ tintColor }) => <FontAwesome name='home' size={30} color={tintColor} />
//     },
//   },
//   AddDeck: {
//     screen: AddDeck,
//     navigationOptions: {
//       tabBarLabel: 'Add Deck',
//       tabBarIcon: ({ tintColor }) => <FontAwesome name='plus-square' size={30} color={tintColor} />
//     },
//   },
// }, {
//   navigationOptions: {
//     title: 'FLASHCARDS',
//     headerTintColor: white,
//     headerStyle: {
//       backgroundColor: purple,
//     }
//   },
//   tabBarOptions: {
//     activeTintColor: Platform.OS === 'ios' ? purple : white,
//     style: {
//       height: 56,
//       backgroundColor: Platform.OS === 'ios' ? white : purple,
//       shadowColor: 'rgba(0, 0, 0, 0.24)',
//       shadowOffset: {
//         width: 0,
//         height: 3
//       },
//       shadowRadius: 6,
//       shadowOpacity: 1
//     }
//   }
// })

const Nav = StackNavigator({
  Home: {
    screen: Home,
  },
  AddDeck: {
    screen: AddDeck,
    navigationOptions: {
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
  AddCard: {
    screen: AddCard,
    navigationOptions: {
      headerTintColor: white,
      headerStyle: {
        backgroundColor: purple,
      }
    }
  },
  Quiz: {
    screen: Quiz,
    navigationOptions: {
      title: 'Quiz',
      headerTintColor: white,
      headerStyle: {
        backgroundColor: purple,
      }
    }
  },
}, {
  navigationOptions: {
    title: 'FLASHCARDS',
    headerTintColor: white,
    headerStyle: {
      backgroundColor: purple,
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