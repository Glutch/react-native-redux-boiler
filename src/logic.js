import { fetchMessage, newMessage } from './actions/messages'

export const runLogic = store => {
  store.dispatch(newMessage({text: 'hello'}))
}