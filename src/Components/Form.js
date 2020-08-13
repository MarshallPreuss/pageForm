import React, { Component } from 'react';

class Form extends Component {
    state = {
        fullName: '',
        userName: '',
        email: '',
        password: '',
        age: '',
        gender: ''
    };

    change = (e) => {
        this.props.onChange({[e.target.name]: e.target.value})
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    onSubmit = (e) => {
        //this.props.onSubmit(this.state);
        e.preventDefault();
        this.setState({
        fullName: '',
        userName: '',
        email: '',
        password: '',
        age: '',
        gender: ''
        });
        this.props.onChange({
            fullName: '',
            userName: '',
            email: '',
            password: '',
            age: '',
            gender: ''
            });
    };
    
    
    
    render(){
        return (
            <form className="Main">
                <label>
                Full Name:
                <input className="Box" name="fullName" value={this.state.fullName} 
                onChange={e => this.change(e)}/>
                </label>
                <br/>
                <label>
                Username:
                <input className="Box" name="userName" value={this.state.userName} 
                onChange={e => this.change(e)}/>
                </label>
                <label>
                Email:
                <input className="Box" name="email" value={this.state.email} 
                onChange={e => this.change(e)}/>
                </label>
                <label>
                Age:
                <input className="Box" name="age" value={this.state.age} 
                onChange={e => this.change(e)}/>
                </label>
                <label>
                Gender:
                <input className="Box" name="gender" value={this.state.gender} 
                onChange={e => this.change(e)}/>
                </label>
                <label>
                Password:
                <input className="Box" name="password" value={this.state.password} 
                onChange={e => this.change(e)}/>
                </label>
                <br/>
                <button className="Button" onClick={e => this.onSubmit(e)}>Submit</button>
                
            </form>
        )
    }
}
export default Form;
