import { ACTIONS } from '../constants'

export function objectContains (str) {
  return (obj) => {
    return (obj.name + obj.pk + obj.phone).toLowerCase().includes(str)
  }
}

export function filter (data, filterString) {
  return filterString !== ''
    ? data.filter(objectContains(filterString))
    : data
}

function handleTableActions (state, action) {
  switch (action.type) {
    case ACTIONS.REQUEST_CUSTOMER_DATA:
      return { isFetching: true }
    case ACTIONS.RECEIVE_CUSTOMER_DATA:
      const allData = action.data
      return {
        isFetching: false,
        allData,
        data: filter(allData, state.filterString)
      }
    case ACTIONS.FILTER_CUSTOMER_DATA:
      return {
        filterString: action.filterString.toLowerCase(),
        data: filter(state.allData, action.filterString)
      }

    default:
      return state
  }
}

function tableReducer (state = {}, action) {
  return Object.assign({}, state, handleTableActions(state, action))
}

export default tableReducer
