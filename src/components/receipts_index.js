import React, { Component } from 'react'
import { connect } from 'react-redux'

export class ReceiptsIndex extends Component {
  render() {
    return (
      <div>
            ReceiptsIndex
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  
})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(ReceiptsIndex)
