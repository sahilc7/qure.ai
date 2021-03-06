import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import App from './containers/App'
import configureStore from './store/configureStore'

// Define the initial state properties here
const initialAppState = {
  table: {
    isFetching: false,
    allData: [], // stores the unfiltered data
    data: [], // stores data to be rendered by component
    filterString: '',
    sortDesc: false,
    sortKey: ''
  },
  errorMessage: null
}

const store = configureStore(initialAppState)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
)
