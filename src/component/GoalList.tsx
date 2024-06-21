import Goal from './Goal';
import {goal} from '../App'

type GoalListProps = {
  goals: goal[];
  onDelete:(id:number)=>void
};

export default function GoalList({ goals,onDelete }: GoalListProps) {
  return (
    <ul>
      {goals.map((goal) => (
        <li key={goal.id} style={{ backgroundColor: "#433333", color: "#ffffff" }}>
          <div>
            <Goal id={goal.id} tittle={goal.tittle} ondelete={onDelete} description={goal.text}></Goal>
          </div>
        </li>
      ))}
    </ul>
  );
}
