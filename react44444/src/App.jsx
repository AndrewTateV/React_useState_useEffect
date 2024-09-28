import React from 'react'
import Footer from './components/Footer'
import { user } from './data.json'
import Main from './components/Main'
import Nav from './components/Nav'
export const User = user
console.log(User);




export default function 


() {
  const FootPosition={
justifyContent :'center',
alignItem :'center'


  }
  return (
    <div>
      <Nav></Nav>
      <Main></Main>
<Footer pos={FootPosition}></Footer>

    </div>
  )
}
