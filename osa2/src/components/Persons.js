import React from 'react'
/** Paketti id kenttien luontiin  */
import shortid from 'shortid'

const Persons = ({persons,filter}) => {
  const personsList = filter.length > 0 ? 
                      persons.filter(person => person.name.toLowerCase().includes(filter.toLowerCase())) :
                      persons;

  const personsElements = personsList.map((person) => {
    return <Person key={shortid.generate()} person={person} />
  });
  return (
    <div>{personsElements}</div>
  )
}

const Person = ({person}) => {
  return (
    <p>{person.name} {person.number}</p>
  )
}

export default Persons