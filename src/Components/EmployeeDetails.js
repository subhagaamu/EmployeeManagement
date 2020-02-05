import React from 'react';
import axios from 'axios';
import EmployeeRow from './EmployeeRow';
import {connect} from 'react-redux';
import App from '../App';

 class EmployeeDetails extends React.Component {
    componentWillMount(){
        axios.get('http://localhost:3000/Employee')
        .then(response =>{
            this.props.dispatch({
                type:'FETCH_EMPLOYEE',
                Employee:response.data
            });

        })
        .catch(error => {
            console.log(error);
        })
    }
    render() {
        return (
            <div>
                <App/>
            <table className="table table-striped table-bordered table-hover col-lg-10">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Age</th>
                        <th>Email</th>
                        <th>Department ID</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.Employee.map((Employees,index) => <EmployeeRow Employee={Employees} key={index} />)}
                </tbody>
            </table>
            </div>
        )

    }
}

const mapStateToProps =(state) =>{
    return{
        Employee:state 
    }
};

export default connect(mapStateToProps)(EmployeeDetails);