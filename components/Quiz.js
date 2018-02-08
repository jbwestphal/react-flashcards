import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { gray, purple, orange } from '../utils/colors'
import SubmitBtn from './SubmitBtn'
import { fetchDecksList } from '../utils/_api'
import If from './If'

export default class Quiz extends React.Component {

  state = {
    data: [],
    showQuestion: true,
    showAnswer: false
  }

  componentDidMount() {

    fetchDecksList().then((result) => {
      if( result !== undefined ) {
        this.setState({
          data: JSON.parse(result)
        })
        // console.log(result)
      }
    })

  }

  showAnswerCard = () => {
    this.setState({
      showAnswer: true
    })
  }

  render() {

    const { navigation } = this.props
    const { data, showQuestion, showAnswer } = this.state
    const { entryId } = navigation.state.params

    return (
      <View style={styles.center}>
        <Text style={styles.pager}>1/2</Text>

        {data && data.filter((item) => item.title === entryId).map((item, key) => (
            <View key={key}>
              {
                item.questions.map((question, key) => (
                  <View style={styles.deckContent} key={key}>

                    <If test={showQuestion === true}>
                      <View style={styles.question}>
                        <Text style={styles.title}>{question.question}</Text>
                        <TouchableOpacity onPress={this.showAnswerCard}><Text style={styles.link}>Answer</Text></TouchableOpacity>
                      </View>
                    </If>
                    <If test={showAnswer === true}>
                      <View style={styles.answer}>
                        <Text style={styles.title}>{question.answer}</Text>
                        <View style={styles.cardFooter}>
                          <SubmitBtn text={'CORRECT'} />
                          <SubmitBtn text={'INCORRECT'} />
                        </View>
                      </View>
                    </If>

                  </View>
                ))
              }
            </View>
          ))
        }
      </View>
    )
  }
}

const styles = StyleSheet.create({
  center: {
    flex: 1,
    marginTop: 20,
    marginLeft: 30,
    marginRight: 30,
  },
  pager: {
    fontSize: 18,
    color: purple,
    marginBottom: 20
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
  },
  cardFooter: {
    flex: 1,
    flexDirection: 'row'
  }
})