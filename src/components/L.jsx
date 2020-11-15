import React, { Component } from 'react';
//import ReactDOM from 'react-dom'
import EmployeeService from '../services/EmployeeServive'


class L extends Component {


    constructor(props){
        
        super(props)

        this.state = {
            data: []
           
        }
        /*
        this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this);
        this.changeLastNameHandler = this.changeLastNameHandler.bind(this);
        this.saveEmployee = this.saveEmployee.bind(this); */

       
    }
    componentDidMount(){
        EmployeeService.getimg().then( (res) =>{
            
            this.setState({data: res.data});
        });
    }
    render() {
        console.log(this.state.data);

        return (
            <div className="w3-container">

       
<img src={`data:image/jpg;base64,${this.state.data}`} />

        
        </div>);

}
}

export default L;