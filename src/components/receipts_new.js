import React, { Component } from 'react'
import { connect } from 'react-redux'

export class ReceiptsNew extends Component {

  render() {
    return (
      <div>
        ReceiptsNew        
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  
})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(ReceiptsNew)
