import CONSTS from '../constants'
import fetchDispatch from './fetchUtils'

const apiProps = {
  url: CONSTS.API,
  types: {
    request: CONSTS.ACTIONS.REQUEST_CUSTOMER_DATA,
    receive: CONSTS.ACTIONS.RECEIVE_CUSTOMER_DATA
  }
}

function shouldFetchData ({table}) {
  return (!table.data || !table.isFetching)
}

function fetchData () {
  return (dispatch, getState) => {
    if (shouldFetchData(getState())) {
      return dispatch(fetchDispatch(apiProps))
    }
  }
}

function filterBy (filterString) {
  return {
    type: CONSTS.ACTIONS.FILTER_CUSTOMER_DATA,
    filterString
  }
}

function sortBy (sortKey) {
  return {
    type: CONSTS.ACTIONS.SORT_CUSTOMER_DATA,
    sortKey
  }
}

export default { fetchData, filterBy, sortBy }
