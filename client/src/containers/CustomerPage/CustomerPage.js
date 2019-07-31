import React from 'react'
import CustomerTable from '../../components/CustomerTable/CustomerTable'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { tableActions as actions } from '../../actions'

const CustomerPage = (props) => {
  return (
    <div>
      <h2> Customer List </h2>
      <CustomerTable {...props} />
    </div>
  )
}

const mapStateToProps = ({ table }) => table
const mapDispatchToProps = (dispatch) => bindActionCreators(actions, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(CustomerPage)
