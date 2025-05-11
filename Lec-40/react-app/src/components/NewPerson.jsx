import React from 'react'

const NewPerson = ({person}) => {
  return (
    <div>
        <p>Name: {person.fullname}</p>
        <p>Age: {person.age}</p>
        <p>Profession: {person.profession}</p>
    </div>
  )
}

export default NewPerson