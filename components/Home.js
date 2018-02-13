import React from 'react'
import { View, ScrollView, Text, TouchableOpacity, Platform, StyleSheet, AsyncStorage } from 'react-native'
import { white, gray, purple } from '../utils/colors'
import { setDecksList, fetchDecksList } from '../utils/_api'
import If from './If'
import SubmitBtn from './SubmitBtn'

class Home extends React.Component {

  state = {
    ready: false,
    data: []
  }

  componentDidMount() {

    const { listAllDecks } = this.props

    const { dispatch } = this.props

    fetchDecksList().then((result) => {

      if( result === undefined ) {
        setDecksList();
      } else {
        this.setState({
          data: JSON.parse(result)
        })
      }

    });

  }

  render() {

    const { listAllDecks, navigation } = this.props
    const { data, ready } = this.state

    return (
      <ScrollView style={{flex:1, marginTop: 30, marginBottom: 30}}>

        <If test={ data === '' }>
					<Text style={styles.headerTitle}>Loading...</Text>
				</If>

        <SubmitBtn text={'New Deck'} onPress={() => navigation.navigate('AddDeck')} />

        {data && Object.keys(data).map((item, key) => (

          <TouchableOpacity
            key={key}
            style={styles.item}
            onPress={() => navigation.navigate('Deck', { title: data[item]['title'], cards: data[item]['questions'].length })}
            >
            <Text style={styles.deckTitle}>{ data[item]['title'] }</Text>
            <Text style={styles.deckDescr}>{data[item]['questions'].length} card(s)</Text>
          </TouchableOpacity>
         ) )}
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

export default Home