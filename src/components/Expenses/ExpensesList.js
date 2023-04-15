import ExpenseItem from "./ExpenseItem";
import './ExpensesList.css';
import Card from "../UI/Card";

export default function ExpensesList(props) {

  return (
    <Card className='expenses'>
      <ExpenseItem
        date={props.expenses[0].date}
        title={props.expenses[0].title}
        amount={props.expenses[0].amount}
      />
      <ExpenseItem
        date={props.expenses[1].date}
        title={props.expenses[1].title}
        amount={props.expenses[1].amount}
      />
      <ExpenseItem
        date={props.expenses[2].date}
        title={props.expenses[2].title}
        amount={props.expenses[2].amount}
      />
      <ExpenseItem
        date={props.expenses[3].date}
        title={props.expenses[3].title}
        amount={props.expenses[3].amount}
      />

    </Card>
  )

}