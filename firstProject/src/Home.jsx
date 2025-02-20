import React from 'react'
import foto from './assets/foto.jpg'

 function Home() {
  return (
    <div>
        <h1>Arianit Tershnjaku</h1>
        <p>Frontend Developer</p>
        <a href='https://google.com'>Google</a>
        <img src={foto} alt='Foto' />
    </div>

  )
}
export default Home;