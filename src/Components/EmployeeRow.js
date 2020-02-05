import React from 'react';
import axios from 'axios';

import { connect } from 'react-redux'

class EmployeeRow extends React.Component {

    deleEmployeeByID() {
        axios.delete("http://localhost:3000/Employee/" + this.props.Employee.id)
            .then((res) => {
                console.log(res.status);
                if (res.status === 200) {
                    this.props.dispatch({
                        type: 'DELETE_EMPLOYEE',
                        id: this.props.Employee.id
                    });
                }
            })
            .catch((err) => {
                console.log(err)
            })
    }

    render() {

        return (
            <tr>
                <td>{this.props.Employee.id}</td>
                <td>{this.props.Employee.FirstName}</td>
                <td>{this.props.Employee.LastName}</td>
                <td>{this.props.Employee.Age}</td>
                <td>{this.props.Employee.Email}</td>
                <td>{this.props.Employee.DepartmentID}</td>
                <td>
                    <button type="button" className=" btn btn-danger" onClick={() => {
                        this.deleEmployeeByID()
                    }}>Delete</button>
                </td>
            </tr>

        )

    }

}

export default connect()(EmployeeRow);