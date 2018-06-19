import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

class App extends Component {
  constructor(props){
    super(props);
    console.log('[App.js] Inside constructor', props);
    this.state = {
      persons: [
        { id: '849', name: 'James', age: 28 },
        { id: '495', name: 'Zoltan', age: 35 },
        { id: '005', name: 'Joe', age: 64 }
      ],
      otherState: 'some other value',
      showPersons: false
    }
  }

  componentWillMount(){
    console.log('[App.js] Component will mount.');
  }

  componentDidMount(){
    console.log('[App.js] component did mount');
  }
  
  // state = {
  //   persons: [
  //     { id: '849', name: 'James', age: 28 },
  //     { id: '495', name: 'Zoltan', age: 35 },
  //     { id: '005', name: 'Joe', age: 64 }
  //   ],
  //   otherState: 'some other value',
  //   showPersons: false
  // }

  deletePersonHandler  = (personIndex) => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons})
  }

  nameChangeHandler = ( event, id ) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    })

    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;

    const persons = [...this.state.persons];

    persons[personIndex] = person;

    this.setState({persons : persons})
  }

  togglePersonsHandler = (event) =>{
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  render() {
    console.log('[App.js] inside render');
    let persons = null;

    if ( this.state.showPersons ){
      persons = <Persons 
          persons={this.state.persons} 
          clicked={this.deletePersonHandler} 
          changed={this.nameChangeHandler} />
    }

    return (
      <div className={classes.App}>
      <Cockpit  
        appTitle={this.props.title}
        showPersons={this.state.showPersons} 
        persons={this.state.persons}
        clicked={this.togglePersonsHandler}/>
      {persons}
    </div>
    );
  }
}

export default App;
