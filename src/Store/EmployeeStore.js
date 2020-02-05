import { createStore } from 'redux';
import EmployeeDetailsReducer from '../Reducers/EmployeeDetailsReducer';

let EmployeeStore = createStore(EmployeeDetailsReducer);

export default EmployeeStore;