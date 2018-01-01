import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import ReceiptsReducer from './reducer_receipts';

const rootReducer = combineReducers({
  receipts: ReceiptsReducer,
  form: formReducer
});

export default rootReducer;
