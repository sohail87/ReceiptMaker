import * as ActionTypes from './types'

export function createReceipt (values, callback) {
  callback();
  return {
    type: ActionTypes.CREATE_RECEIPT,
    payload: values
  }
}
