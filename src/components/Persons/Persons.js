import React, { PureComponent } from 'react';
import Person from './Person/Person';

class Persons extends PureComponent {
    constructor(props){
        super(props);
        console.log('[Persons.js] Inside constructor', props);
      }
    
    componentWillMount(){
        console.log('[Persons.js] Component will mount.');
    }

    componentDidMount(){
        console.log('[Persons.js] component did mount');
    }

    componentWillReceiveProps(nextProps) {
        console.log('[UPDATE Persons.js] Inside componentWillReceiveProps', nextProps);
    }

    // shouldComponentUpdate (nextProps, nextState) {
    //     console.log('[Update Persons.js] Inside shouldComponentUpdate', nextProps, nextState);
    //     //return true;
    //     return nextProps.persons !== this.props.persons ||
    //     nextProps.changed !== this.props.changed ||
    //     nextProps.clicke !== this.props.clicked;
    // }

    componentWillUpdate(nextProps, nextState) {
        console.log('[UPDATE Persons.js] Inside componentWillUpdate', nextProps, nextState);
    }

    componentDidUpdate() {
        console.log('[UPDATE Persons.js] Inside componentDidUpdate');
    }

    render() {
        console.log('[Persons.js] component render');
        return this.props.persons.map((person, index) => {
            return <Person 
                click={() => this.props.clicked(index)} 
                name={person.name} 
                age={person.age} 
                key={person.id}
                changed={(event) => this.props.changed(event, person.id)} />
            });
        }
}

export default Persons;