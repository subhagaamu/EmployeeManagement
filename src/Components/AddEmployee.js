import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import App from '../App';

class AddEmployee extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            id: null,
            Fname: null,
            Lname: null,
            age: null,
            email: null,
            deptID: null,
            inValid: false,
            idReq: false,
            fnameReq: false,
            lnameReq: false,
            ageReq: false,
            depIDReq: false
        }
    }
    addEmployee(event) {
        event.preventDefault();
        let data = {
            "id": this.state.id,
            "FirstName": this.state.Fname,
            "LastName": this.state.Lname,
            "Age":  this.state.age,
            "Email": this.state.email,
            "DepartmentID": this.state.deptID
        };

        axios.post('http://localhost:3000/Employee', data)
            .then(response => {
                if (response.status === 201) {
                    this.refs.employeeForm.reset();
                    this.props.dispatch({
                        type: 'ADD_EMPLOYEE',
                        Employee: response.data
                    });
                }
            })
            .catch(error => {
                console.log(error);
            })
    }
    changeid(e) {
        this.setState({ id: e.target.value, idReq: false })
        var id = e.target.value
        var reg=RegExp(/^[0-9]*$/)
        var verify= reg.test(id)
        if (id === "" || verify===false) {
            this.setState({ idReq: true })
        }
        this.setState({ id: e.target.value })
    }
    changeFname(e) {
        this.setState({ Fname: e.target.value, fnameReq: false })
        var fname = e.target.value
        var reg=RegExp(/^[a-zA-Z ]*$/)
        var verify= reg.test(fname)
        if (fname === ""|| verify===false) {
            this.setState({ fnameReq: true })
        }
        this.setState({ Fname: e.target.value })
    }
    changeLname(e) {
        this.setState({ Lname: e.target.value, lnameReq: false })
        var lname = e.target.value
        var reg=RegExp(/^[a-zA-Z ]*$/)
        var verify= reg.test(lname)
        if (lname === ""||verify===false) {
            this.setState({ lnameReq: true })
        }
        this.setState({ Lname: e.target.value })
    }
    changeAge(e) {
        this.setState({ age: e.target.value, ageReq: false })
        var age = e.target.value
        var reg=RegExp(/^[0-9]*$/)
        var verify= reg.test(age)
        if (age === "" || verify===false) {
            this.setState({ ageReq: true })
        }
        this.setState({ age: e.target.value })
    }
    changeDeptID(e) {
        this.setState({ deptID: e.target.value, depIDReq: false })
        var depID = e.target.value
        var reg=RegExp(/^[0-9]*$/)
        var verify= reg.test(depID)
        if (depID === ""|| verify===false) {
            this.setState({ depIDReq: true })
        }
        this.setState({ deptID: e.target.value })
    }

    emailValidation(e) {
        this.setState({ email: e.target.value, inValid: false })
        var email = e.target.value;
        const validEmailRegex =
            RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);
        var verify = validEmailRegex.test(email);
        if (!verify) {
            this.setState({ inValid: true })
        }
        this.setState({ email: e.target.value })
    }
    render() {
        return (
            <div>
                <App/>
            <form onSubmit={(e) => this.addEmployee(e)} ref="employeeForm">
                <div className="form-group col-lg-6">
                    <label>Enter the ID:</label>
                    <input type='text'  onBlur={(e) => this.changeid(e)} className="form-control" />
                </div>
                {this.state.idReq && <div className="alert alert-danger">Enter ID or enter valid ID</div>}
                <div className="form-group col-lg-6">
                    <label>Enter the FirstName:</label>
                    <input type='text' onBlur={(e) => this.changeFname(e)} className="form-control" />
                </div>
                {this.state.fnameReq && <div className="alert alert-danger">Enter FirstName</div>}
                <div className="form-group col-lg-6">
                    <label>Enter the LastName:</label>
                    <input type='text' onBlur={(e) => this.changeLname(e)} className="form-control" />
                </div>
                {this.state.lnameReq && <div className="alert alert-danger">Enter LastName</div>}
                <div className="form-group col-lg-6">
                    <label>Enter the Age:</label>
                    <input type='text' onBlur={(e) => this.changeAge(e)} className="form-control" />
                </div>
                {this.state.ageReq && <div className="alert alert-danger">Enter Age or enter a valid age</div>}
                <div className="form-group col-lg-6">
                    <label>Enter the Email:</label>
                    <input type='text' onBlur={(e) => this.emailValidation(e)} className="form-control" />
                </div>
                {this.state.inValid && <div className="alert alert-danger">Enter valid email ID</div>}
                <div className="form-group col-lg-6">
                    <label>Enter the DepartmentID:</label>
                    <input type='text' onBlur={(e) => this.changeDeptID(e)} className="form-control" />
                </div>
                {this.state.depIDReq && <div className="alert alert-danger">Enter DepartmentID or enter valid DepartmentID</div>}
                <div className="form-group col-lg-6 text-center">
                    <button type='submit' className="btn btn-primary" disabled={this.state.inValid || this.state.id === null || this.state.idReq || this.state.fnameReq || this.state.lnameReq || this.state.ageReq || this.state.depIDReq || this.state.fname === null || this.state.lname === null || this.state.age === null || this.state.email === null || this.state.deptID === null} onSubmit={(e) => this.addEmployee(e)} >Add Employee</button>
                </div>
            </form>
            </div>
        )
    }
}
export default connect()(AddEmployee);