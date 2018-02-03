import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

class Deck extends React.Component {

  static navigationOptions = ({ navigation }) => {
    const { title } = navigation.state.params

    return {
      title: title
    }
  }

  render() {

    const { navigation } = this.props
    const { title } = navigation.state.params

    return (
      <View>
        <Text>{ title }</Text>
        <Text>5 cards</Text>
        <View>
          <TouchableOpacity onPress={() => navigation.navigate('Deck')}>
            <Text>Add Card</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Deck')}>
            <Text>Start Quiz</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}


export default Deck