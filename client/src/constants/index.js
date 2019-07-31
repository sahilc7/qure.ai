function stringsToObject (actions) {
  return actions.trim().split(/\s+/).reduce((obj, action) => {
    obj[action] = action
    return obj
  }, {})
}

export default {
  API: 'http://127.0.0.1:8000/api/customers/',

  ACTIONS: stringsToObject(`
    REQUEST_CUSTOMER_DATA
    RECEIVE_CUSTOMER_DATA
    FILTER_CUSTOMER_DATA
    SORT_CUSTOMER_DATA

    SET_ERROR_MESSAGE
    RESET_ERROR_MESSAGE
  `)
}
