import React, { Component } from 'react';
import { connect } from 'react-redux';

import Person from '../components/Person/Person';
import AddPerson from '../components/AddPerson/AddPerson';
import * as actionTypes from '../store/actions';

class Persons extends Component {
    constructor(props){
        super(props);
        this.handleAdd = this.handleAdd.bind(this);
        this.handleRemove = this.handleRemove.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
        this.state = {
            name:'',
            age:'',
            editId: null
        }
    }

    handleChange(event){
        console.log('inside handleChange');
        switch(event.target.id){
            case 'name':
                this.setState({
                    name: event.target.value
                })
            break;
            case 'age':
                this.setState({
                    age: event.target.value
                })
            break;
            default: 
        }
    }

    handleAdd(){
        const {name, age} = this.state;
        this.props.dispatch({type: actionTypes.ADD_PERSON,personData:{name,age}});

        this.setState({
            name: '',
            age: ''
        });
    }

    handleRemove(id){
        this.props.dispatch({type: actionTypes.REMOVE_PERSON, personId: id});
    }
   handleEdit(id){
    var persons = this.props.prs;
    // console.log('handleedit  ' + id);
    for(let i = 0; i < persons.length; i++){
        if(persons[i].id === id){
            let person = persons[i];
            console.log(person);
            this.setState({ 
                name: person.name,
                age: person.age
            });
         }
    }
    /* this.props.prs.map(user => {
        if(user.id === id){
           console.log(user);
        }
    }); */
   }

    render () {
        return (
            <div>
                <AddPerson 
                    personAdded={this.handleAdd} 
                    handleChange={this.handleChange}
                    name = {this.state.name}
                    age = {this.state.age} />
                {
                this.props.prs.map(person => (
                    <Person 
                        key={person.id}
                        name={person.name} 
                        age={person.age} 
                        clicked={() => this.handleRemove(person.id)}
                        handleEdit={() => this.handleEdit(person.id)}/>
                ))}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        prs: state.persons
    };
};

/* const mapDispatchToProps = dispatch => {
    return {
        onAddedPerson: (name,age) => dispatch({type: actionTypes.ADD_PERSON,personData:{name:name,age:age}}),
        onRemovedPerson: (id) => dispatch({type: actionTypes.REMOVE_PERSON, personId: id})
    }
}; */

export default connect(mapStateToProps/* , mapDispatchToProps */)(Persons);