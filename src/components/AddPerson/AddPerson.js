import React ,{ Component} from 'react';

import './AddPerson.css';

class  AddPerson extends Component{
   render(){
       return (
        <div className="AddPerson">
        <input 
            id="name"
            type ="text" 
            placeholder="Name"
            onChange={this.props.handleChange} 
            value={this.props.name} />
       <input 
            id="age"
            type="number"
            placeholder="Age"
            onChange={this.props.handleChange} 
            value={this.props.age} />
        <button onClick={this.props.personAdded}>Add</button>
    </div>
       );
   }
}



export default AddPerson;