import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { NavigationActions } from 'react-navigation'
import { getDeck, deleteDeck } from '../utils/_api'
import { gray } from '../utils/colors'
import SubmitBtn from './SubmitBtn'
import If from './If'

export default class Deck extends React.Component {

  state = {
    title: '',
    questions: 0
  }

  static navigationOptions = ({ navigation }) => {
    const { title } = navigation.state.params

    return {
      title: title
    }
  }

  componentDidMount() {
    const { title } = this.props.navigation.state.params

    getDeck(title).then(data => {
      this.setState({
        title: data.title,
        questions: data.questions.length,
      })
    })
  }

  deleteThisDeck = () => {

    const { navigation } = this.props
    const { title } = navigation.state.params

    deleteDeck(title).then(() => {
      navigation.dispatch(NavigationActions.reset({
        index: 0,
        actions: [
          NavigationActions.navigate({ routeName: 'Home' })
        ]
      }));
    })
  }

  render() {

    const { navigation } = this.props
    const { title, questions } = this.state

    return (
      <View style={styles.deckWrapper}>
        <View style={styles.deckContent}>
          <Text style={styles.deckTitle}>{title}</Text>
          <Text style={styles.deckQtdCards}>{questions} card(s)</Text>
        </View>
        <View style={styles.deckFooter}>
          <SubmitBtn text={'Add Card'} onPress={() => navigation.navigate('AddCard', { entryId: title, cards: questions })} />
          <If test={ questions !== 0 }>
            <SubmitBtn text={'Start Quiz'} onPress={() => navigation.navigate('Quiz', { entryId: title, cards: questions })} />
          </If>
        </View>
        <View style={styles.deckFooter}>
          <SubmitBtn text={'Delete Deck'} onPress={this.deleteThisDeck} />
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
    alignItems: 'center',
    justifyContent: 'center'
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 30,
    marginRight: 30,
  }

})