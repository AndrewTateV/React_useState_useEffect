import React from 'react'
import Home from './pages/Home'

import styled from 'styled-components'

const Button = styled.button`
  color: red;
  font-size: 20px;
`

export default function App() {
  const [initCountNumber, setInitCountNumber] = React.useState(5)

  return (
    <div>
      <Button onClick={() => {
        setInitCountNumber(initCountNumber - 1)
      }
      }>-</Button>
      {initCountNumber}
      <Button onClick={
        () => {
          setInitCountNumber(initCountNumber + 1)
        }
      }>+</Button>
      <Home initCountNumber={5}></Home>
    </div >
  )}
// props改变，子组件都会刷新一遍
// useSate不管是否引用，都会重新render