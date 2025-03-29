import React from 'react'
import Button from './Button';

function Home() {
  var name = "Arianit";
  let age = 30;
  var arr = [1,2,3,4,5];

  age += 2;
  return (
    <div>
      <h1>Home Page</h1>
      <p>{name}</p>
      <p>{age}</p>
      <p>{arr}</p>
      <Button />
    </div>
  )
}
export default Home