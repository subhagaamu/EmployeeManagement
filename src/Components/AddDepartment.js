import React from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import App from '../App';

 class AddDepartment extends React.Component{

    constructor(props){
        super(props);
        this.state={
            id:null,
            name:null,
            idReq:false,
            nameReq:false
        }
    }
    addDepartment(event){
        event.preventDefault();
        let data={
            "id":this.state.id,
            "Name":this.state.name,
        };

        axios.post('http://localhost:3000/Department',data)
        .then(response =>{
            if(response.status===201){
                this.refs.departmentForm.reset();
                this.props.dispatch({
                    type:'ADD_DEPARTMENT',
                    Department:response.data
                });
                
            }
            console.log(response.status);
            
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
    changename(e) {
        this.setState({ name: e.target.value, nameReq: false })
        var name = e.target.value
        var reg=RegExp(/^[a-zA-Z ]*$/)
        var verify= reg.test(name)
        if (name === ""|| verify===false) {
            this.setState({ nameReq: true })
        }
        this.setState({ name: e.target.value })
    }
    render(){
        return(
            <div>
                <App/>
            <form onSubmit={()=>this.addDepartment} ref="departmentForm">
                    <div className="form-group col-lg-6">
                        <label>Enter the ID:</label>
                        <input type='text' name="id" onBlur={(e)=>this.changeid(e)} className="form-control" /> 
                        </div>
                        {this.state.idReq && <div className="alert alert-danger">Enter ID or enter valid ID</div>}
                        <div className="form-group col-lg-6">
                        <label>Enter the Name:</label>
                        <input type='text' name="name" onBlur={(e)=>this.changename(e)} className="form-control" /> 
                        </div>
                        {this.state.nameReq && <div className="alert alert-danger">Enter ID or enter valid ID</div>}
                        <div className="form-group col-lg-6 text-center">
                        <button type='submit' className="btn btn-primary" disabled={this.state.idReq||this.state.nameReq||this.state.id===null||this.state.name===null}onSubmit={(e)=>this.addDepartment(e)} >Add Department </button>
                        </div>
                </form>
                </div>
        )
    }
}
export default  connect()(AddDepartment);