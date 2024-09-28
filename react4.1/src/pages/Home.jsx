import React from 'react'

export default function Home(props) {
                    const{initNumber}=props
     const [count ,setCount]=  React.useState(()=>{

return Math.floor(Math.random({initNumber})*10)
})        


const [count2 , setCount2 ]=React.useState()
//      附作用
React.useEffect(()=>{
setCount2(Math.random(count))

},[count])

const [count3,setCount3]=React.useState()

React.useEffect(()=>{
setCount3(count2+100)
},[count2])




     
     function minus (){
                     setCount((count)=>count -1)
     }
     function plus (){
                    setCount((count)=>count+1)
                    setCount((count)=>count+1)
     }
  return (
    <>
    <button onClick={minus}>-</button>

    {count2}
  <br/>
    {count3}
    <button onClick={plus}>+</button>
    
    </>
  )
}
