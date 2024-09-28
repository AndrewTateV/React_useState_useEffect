import React,{useState} from 'react'
import { User } from '../App.jsx'
export default function Description() {

  const [name, setName] = useState(User.name)

  function ChangeName() {
    User.name = 'Tianyang Guan'
    // setName('Tianyang Guan')
  }



  return (
    <>
      <button onClick={ChangeName}>Change Name</button>
      <div>
        <div>Description1: {User.name}</div>
        <br />
        <div>Description2: {name}</div>
      </div>

    </>

  )
}
