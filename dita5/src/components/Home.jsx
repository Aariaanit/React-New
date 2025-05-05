import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {
  //Krijimi i nje liste duke e perdorur metoden Hook 'useState',
  //Ne kete rast e kemi perdorur per te krijuar nje Array me tri elemente.
  //Mirepo elementet brenda array jane objekte
  const [blogs, setBlogs] = useState([
    {
      title: "Shkolla Digjitale Prizren",
      body: "Kurs i programimit",
      instructor: "Arianit Tershnjaku",
      id: 1,
    },
    {
      title: "Shkolla Digjitale Prizren",
      body: "Kurs i programimit",
      instructor: "Fatjona Hoxhaj",
      id: 2,
    },
    {
      title: "Shkolla Digjitale Prizren",
      body: "Kurs i programimit",
      instructor: "Kebir Cesko",
      id: 3,
    },
    {
      title: "Shkolla Digjitale Prizren",
      body: "Kurs i programimit",
      instructor: "Fation Krasniqi",
      id: 4,
    },

  ]);
  const [name, setName] = useState("Arianit");


  //useEffect() eshte nje metode (Hook) qe na mundeson te krijojme efekte me elementet e ndryshme qe i kemi krijue me heret
  useEffect(() => {
    console.log("use effect ran");
    console.log(blogs);
    console.log(name);
  });
  return (
    <div className="home">
      {/* Nxjerrja e vlerave te array duke e perdor metoden 'map()', kjo metode eshte e ngjashme me loop-en foreach */}
      

      <BlogList blogs={blogs} title={"Blog Lists"}/>
    </div>
  );
};

export default Home;
