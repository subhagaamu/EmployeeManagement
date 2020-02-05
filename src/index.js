import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Route,Switch  } from 'react-router-dom';
import EmployeeDetails from './Components/EmployeeDetails';
import DepartmentDetails from './Components/DepartmentDetails';
import AddEmployee from './Components/AddEmployee';
import AddDepartment from './Components/AddDepartment';
import {Provider} from 'react-redux';
import store from "./Store/EmployeeStore"

ReactDOM.render(<Provider store={store}><BrowserRouter>
    <Switch>
        <Route exact path='/' component={App}/>
        <Route exact path='/Employee-Details' component={EmployeeDetails} />
        <Route exact path='/Department-Details' component={DepartmentDetails} />
        <Route exact path='/Add-Employee' component={AddEmployee}/>   
        <Route exact path='/Add-Department' component={AddDepartment}/>     
    </Switch>
</BrowserRouter></Provider>, document.getElementById('root'));

serviceWorker.unregister();
