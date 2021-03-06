 import React, { Component } from 'react';
 import Form from './Form';

class Display extends Component {


    state = {
      fields: {}
    }
    
    onChange = updatedValue => {
      this.setState({
        fields: {
          ...this.state.fields,
          ...updatedValue
        }
      });
  
    };
    
    render(){
    return (
      <div className="App">
        <Form onChange={fields => this.onChange(fields)} />
        <p className="Par">
          {JSON.stringify(this.state.fields, null, 2)}
        </p>
      </div>
    );
    }
  }
  
  export default Display;
  