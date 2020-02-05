import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import DepartmentRow from './DepartmentRow';
import App from '../App'

class DepartmentDetails extends React.Component {

    componentWillMount() {
        axios.get("http://localhost:3000/Department")
        .then((response) => {
            this.props.dispatch({
                type: 'FETCH_DEPARTMENT',
                Department: response.data
            });
        }).catch(error => {
            console.log(error);
        })
    }
    render() {
        return (
            <div>
                <App/>
            <table className="table table-striped table-bordered table-hover col-lg-10">
               <thead>
                    <th>ID</th>
                    <th>Department Name</th>
                    <th>Action</th>
                </thead>
                <tbody>
                {this.props.Department.map((Department,index) => <DepartmentRow Department={Department} key={index} />)}
                </tbody>
            </table>
            </div>
        )
    }
}

const mapStateToProps =(state) =>{
    return{
        Department:state 
    }
};

export default connect(mapStateToProps)(DepartmentDetails);