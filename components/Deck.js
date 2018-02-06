import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { gray } from '../utils/colors'
import SubmitBtn from './SubmitBtn'

class Deck extends React.Component {

  static navigationOptions = ({ navigation }) => {
    const { title, cards } = navigation.state.params

    return {
      title: title,
      cards: cards
    }
  }

  render() {

    const { navigation } = this.props
    const { title, cards } = navigation.state.params

    return (
      <View style={styles.deckWrapper}>
        <View style={styles.deckContent}>
          <Text style={styles.deckTitle}>{title}</Text>
          <Text style={styles.deckQtdCards}>{cards} card(s)</Text>
        </View>
        <View style={styles.deckFooter}>
          <SubmitBtn text={'Add Card'} onPress={() => navigation.navigate('AddCard', { entryId: title })} />
          <SubmitBtn text={'Start Quiz'} onPress={() => navigation.navigate('Quiz', { entryId: title })} />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({

  deckWrapper: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  deckContent: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  deckTitle: {
    fontSize: 26,
    marginBottom: 20,
    textAlign: 'center'
  },
  deckQtdCards: {
    fontSize: 20,
    color: gray,
    textAlign: 'center'
  },
  deckFooter: {
    flex: 1,
    flexDirection: 'row',
    alignSelf: 'flex-end'
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 30,
    marginRight: 30,
  }

})


export default Deck