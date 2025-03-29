import React from 'react'
import { useState } from 'react'
import Button from './Button'


function Home() {
  const [name , setName] = useState('Arianit')
  const [arr, setArr] = useState([1,2,3,4,5,6]);
  const [obj, setObj] = useState(
    {
      name:"Arianit",
      age: 30,
      occupation: "Software Engineer",
      hobbies: ["Coding ", "Reading ", "Hiking"],
    }
  );

  return (
    <div>
        <h1>Home Page</h1>
        <Button />
        <hr />
        <h2>{name}</h2>
        <h2>{ arr }</h2>
        <h2>{ obj.name }</h2>
        <h2>{ obj.age }</h2>
        <h2>{ obj.occupation }</h2>
        <h2>{ obj.hobbies }</h2>

        

    </div>
  )
}

export default Home