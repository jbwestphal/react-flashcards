import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { gray, purple, orange, white } from '../utils/colors'
import SubmitBtn from './SubmitBtn'
import { fetchDecksList } from '../utils/_api'
import If from './If'

export default class Quiz extends React.Component {

  state = {
    data: [],
    showQuestion: true,
    showAnswer: false,
    showResult: false,
    page: 0,
    total: 1,
    corrects: 0
  }

  componentDidMount() {

    const { cards } = this.props.navigation.state.params

    fetchDecksList().then((result) => {
      if( result !== undefined ) {
        this.setState({
          data: JSON.parse(result)
        })
      }
    })

    this.setState({
      total: cards
    })

  }

  showAnswerCard = () => {
    this.setState({
      showAnswer: true
    })
  }

  nextQuestion = () => {
    const { page, total } = this.state

    if( page < (total - 1) ) {

      this.setState((prevState, props) => ({
        page: prevState.page + 1
      }))

      this.setState({
        showAnswer: false
      })
    } else {
      this.setState({
        showResult: true,
        showAnswer: false,
        showQuestion: false,
      })
    }

  }

  submitCorrect = () => {
    this.nextQuestion()

    this.setState((prevState, props) => ({
      corrects: prevState.corrects + 1
    }))
  }

  submitIncorrect = () => {
    this.nextQuestion()
  }

  restartQuiz = () => {
    this.setState({
      page: 0,
      corrects: 0,
      showResult: false,
      showQuestion: true
    })
  }

  render() {

    const { navigation } = this.props
    const { data, showQuestion, showAnswer, showResult, page, total, corrects } = this.state
    const { entryId, cards } = navigation.state.params

    return (
      <View style={styles.center}>
        <Text style={styles.pager}>{page+1}/{total}</Text>
        {data && Object.keys(data).filter((item) => data[item]['title'] === entryId).map((item, key) => (
            <View key={key}>
              {
                <View style={styles.deckContent} key={data[item]['questions'][page]}>

                  <If test={showQuestion === true && showAnswer === false}>
                    <View>
                      <Text style={styles.title}>{data[item]['questions'][page]['question']}</Text>
                      <TouchableOpacity onPress={this.showAnswerCard}><Text style={styles.link}>Answer</Text></TouchableOpacity>
                    </View>
                  </If>
                  <If test={showAnswer === true}>
                    <View>
                      <Text style={styles.title}>{data[item]['questions'][page]['answer']}</Text>
                      <View style={styles.cardFooter}>
                        <SubmitBtn onPress={this.submitCorrect} text={'CORRECT'} />
                        <SubmitBtn onPress={this.submitIncorrect} text={'INCORRECT'} />
                      </View>
                    </View>
                  </If>

                  <If test={showResult === true}>
                    <View>
                      <Text style={styles.title}>Congrats! You finished the quiz!</Text>
                      <Text style={styles.text}>Your score: { corrects } of { total }</Text>
                      <View style={styles.cardFooter}>
                        <SubmitBtn onPress={this.restartQuiz} text={'Restart Quiz'} />
                        <SubmitBtn onPress={ () => navigation.goBack() } text={'Back to Deck'} />
                      </View>
                    </View>
                  </If>

                </View>
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
  text: {
    fontSize: 19,
    marginBottom: 10,
    marginTop: 15,
    textAlign: 'center',
    color: orange
  },
  link: {
    fontSize: 18,
    textAlign: 'center',
    color: orange
  },
  cardFooter: {
    flex: 1,
    marginTop: 40,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row'
  }
})