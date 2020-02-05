import React from 'react';
import axios from 'axios';

import { connect } from 'react-redux'

class DepartmentRow extends React.Component {

    deleDeptByID() {
        axios.delete("http://localhost:3000/Department/" + this.props.Department.id)
            .then((res) => {
                console.log(res.status);
                if (res.status === 200) {
                    this.props.dispatch({
                        type: 'DELETE_DEPARTMENT',
                        id: this.props.Department.id
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
                <td>{this.props.Department.id}</td>
                <td>{this.props.Department.Name}</td>
                <td>
                    <button type="button" className=" btn btn-danger" onClick={() => {
                        this.deleDeptByID()
                    }}>Delete</button>
                </td>
            </tr>

        )

    }

}

export default connect()(DepartmentRow);