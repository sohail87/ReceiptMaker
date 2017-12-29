
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Field, reduxForm } from "redux-form";

export class ReceiptsNew extends Component {

  render() {
    return (
      <div className="bd-callout bd-callout-info">
        <h4>New Receipt</h4>   
        <div>
        <form>
            <div className="form-group row">
              <label  className="col-4 col-form-label">Bill To</label> 
              <div className="col-8">
                <div className="input-group">
                  <div className="input-group-addon">
                    <i className="fa fa-address-card-o"></i>
                  </div> 
                  <Field type="text" component="input" name="billingName" placeholder="Billing Customer Name" required="required"/>
                </div>
              </div>
            </div>
            <div className="form-group row">
              <label  className="col-4 col-form-label">Receipt Date</label> 
              <div className="col-8">
                <Field name="receiptDate" type="text" component="input" required="required" className="form-control here"/>
              </div>
            </div>
            <div className="form-group row">
              <label  className="col-4 col-form-label">Receipt No.</label> 
              <div className="col-8">
                <input id="ReceiptNumber" name="ReceiptNumber" type="text" className="form-control here" required="required"/>
              </div>
            </div>
            <div className="form-group row">
              <label  className="col-4 col-form-label">Item</label> 
              <div className="col-8">
                <input id="Item" name="Item" type="text" className="form-control here" />
              </div>
            </div>
            <div className="form-group row">
              <label  className="col-4 col-form-label">Item Date</label> 
              <div className="col-8">
                <input id="itemDate" name="itemDate" type="text" required="required" className="form-control here" />
              </div>
            </div>
            <div className="form-group row">
              <label  className="col-4 col-form-label">Item Description</label> 
              <div className="col-8">
                <input id="itemDescription" name="itemDescription" type="text" className="form-control here" />
              </div>
            </div>
            <div className="form-group row">
              <label  className="col-4 col-form-label">Quantity</label> 
              <div className="col-8">
                <input id="quantity" name="quantity" type="text" className="form-control here" />
              </div>
            </div>
            <div className="form-group row">
              <label className="col-4 col-form-label">Rate</label> 
              <div className="col-8">
                <input id="rate" name="rate" type="text" className="form-control here" />
              </div>
            </div> 
            <div className="form-group row">
              <div className="offset-4 col-8">
                <button name="submit" type="submit" className="btn btn-primary">Submit</button>
              </div>
            </div>
        </form>  
        </div>     
      </div>
      
    )
  }
}

const mapStateToProps = (state) => ({
  
})

const mapDispatchToProps = {
  
}

export default reduxForm({ form: 'ReceiptsNewForm' })(
connect(mapStateToProps, mapDispatchToProps)(ReceiptsNew)
)