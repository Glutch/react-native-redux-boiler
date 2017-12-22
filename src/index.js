import React from 'react'
import { Provider } from 'react-redux'
import configureStore from './store/configureStore'
import { runLogic } from './logic'

import Test from './components/Test'

const store = configureStore()
runLogic(store)

const Main = () => (
  <Provider store={store}>
    <Test />
  </Provider>
)

export default Main