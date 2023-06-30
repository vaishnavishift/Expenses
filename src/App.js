import ExpenseItem from './components/ExpenseItem'; 
import NewExpense from './components/NewExpense/NewExpense';
function App() {
  const Expenses = [
    {
      id: "e1",
      title: "Books",
      amount: 100,
      date: new Date(2023, 1, 14),
    },
    {
      id: "e2",
      title: "Fruits",
      amount: 80.0,
      date: new Date(2023, 1, 15),
    },
    {
      id: "e3",
      title: "Pens",
      amount: 50.0,
      date: new Date(2023, 1, 16),
    },
    {
      id: "e4",
      title: "Pencils",
      amount: 30,
      date: new Date(2023, 1, 24),
    },
  ];
  return (
    <div>
    
      <NewExpense/>
      <ExpenseItem
        id={Expenses[0].id}
        title={Expenses[0].title}
        amount={Expenses[0].amount}
        date={Expenses[0].date}
      ></ExpenseItem>
      <ExpenseItem
        id={Expenses[1].id}
        title={Expenses[1].title}
        amount={Expenses[1].amount}
        date={Expenses[1].date}
      ></ExpenseItem>
      <ExpenseItem
        id={Expenses[2].id}
        title={Expenses[2].title}
        amount={Expenses[2].amount}
        date={Expenses[2].date}
      ></ExpenseItem>
      <ExpenseItem
        id={Expenses[3].id}
        title={Expenses[3].title}
        amount={Expenses[3].amount}
        date={Expenses[3].date}
      ></ExpenseItem>
    </div>
  );
}

export default App;
