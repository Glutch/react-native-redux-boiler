import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { connect } from 'react-redux'
import * as messagesActions from '../actions/messages'

class Test extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        {this.props.messages.map((message, i) => {
          return <Text key={i}>{message.text}</Text>
        })}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})

const mapDispatchToProps = dispatch => ({
  dispatch: dispatch,
  newMessage: messagesActions.newMessage
})

const mapStateToProps = state => ({
  messages: state.messages
})

export default connect(mapStateToProps, mapDispatchToProps)(Test)