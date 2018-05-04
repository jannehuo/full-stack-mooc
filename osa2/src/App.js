import React from 'react';
import Persons from './components/Persons.js';
import Form from './components/Form.js';
import Filter from './components/Filter.js';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      persons: [
        { name: 'Arto Hellas', number: '040-123456' },
        { name: 'Martti Tienari', number: '040-123456' },
        { name: 'Arto Järvinen', number: '040-123456' },
        { name: 'Lea Kutvonen', number: '040-123456' }
      ],
      newName: '',
      newNumber:'',
      filter:'',
      nameError:false
    }
    this.submitForm = this.submitForm.bind(this);
    this.nameInputChange = this.nameInputChange.bind(this);
    this.phoneInputChange = this.phoneInputChange.bind(this);
    this.filterInputChange = this.filterInputChange.bind(this);
  }

  submitForm(e) {
    e.preventDefault();
    const newNameObj = {
      name:this.state.newName,
      number:this.state.newNumber
    };
    
    const persons = [...this.state.persons];
    persons.push(newNameObj);
    if(!this.state.nameError) {
      this.setState({
        persons,
        newName:'',
        newPhone:''
      });
      e.target.reset();
    }
  }

  nameInputChange(e) {
    const alreadyExists = this.state.persons.filter((person) => {
      return person.name.toLocaleLowerCase() === e.target.value.toLocaleLowerCase();
    });
    if(alreadyExists.length > 0) {
      this.setState({
        nameError: true
      });
    } else {
      this.setState({
        newName: e.target.value,
        nameError: false
      });
    }
  }

  phoneInputChange(e) {
    this.setState({
      newNumber:e.target.value
    });
  }

  filterInputChange(e) {
    this.setState({
      filter:e.target.value
    });
  }

  render() {
    return (
      <div className='app-container'>
        <h1>Puhelinluettelo</h1>
        <Filter filterInput={this.filterInputChange} />
        <Form error={this.state.nameError} submit={this.submitForm} phoneInput={this.phoneInputChange} nameInput={this.nameInputChange}/>
        <h1>Numerot</h1>
        <Persons filter={this.state.filter} persons={this.state.persons} />
      </div>
    )
  }
}

export default App;
