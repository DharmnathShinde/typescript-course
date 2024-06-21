import './App.css';
import img from './assets/preview.webp';
import GoalList from './component/GoalList';
import Header from './component/Header';
import { useState } from 'react';

export type goal = {
  tittle: string;
  text: string;
  id: number;
};
 

function App() {
  const [goals, setGoal] = useState<goal[]>([]);

  function handleGoal() {
    setGoal((prevGoal) => {
      console.log([...prevGoal]);
      const newGoal: goal = {
        id: Math.random(),
        tittle: "something",
        text: "string",
      };
      return [...prevGoal, newGoal];
    });
  }
  function handleDelete(id:number){
     setGoal(prevGoal=>{
     return prevGoal.filter((goals=>goals.id!==id))
     })
  }

  return (
    <main style={{ backgroundColor: "gray", width: "250px", height: "300px" }}>
      <Header image={{ src: img, alt: 'this is heading image' }}></Header>
      <button onClick={handleGoal}>Add goal</button>
      <GoalList goals={goals} onDelete={handleDelete} />
    </main>
  );
}

export default App;
