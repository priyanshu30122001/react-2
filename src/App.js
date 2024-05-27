
import './App.css';
import Student from './component/student.jsx';

function App() {
  const users=[
    {
      fullName:'priyanshu padeliya',
      email:'priyanshu@gmail.com',
      batchNo:'10'
    },
    {
      fullName:'akash kumar',
      email:'akash@gmail.com',
      batchNo:'11'
    },
    {
      fullName:'Nisha kumari',
      email:'nisha@gmail.com',
      batchNo:'10'
    },
    {
      fullName:'priyanshu padeliya',
      email:'priyanshu@gmail.com',
      batchNo:'10'
    },
    {
      fullName:'akash kumar',
      email:'akash@gmail.com',
      batchNo:'11'
    },
    {
      fullName:'Nisha kumari',
      email:'nisha@gmail.com',
      batchNo:'10'
    },
    {
      fullName:'priyanshu padeliya',
      email:'priyanshu@gmail.com',
      batchNo:'10'
    },
    {
      fullName:'akash kumar',
      email:'akash@gmail.com',
      batchNo:'11'
    },

  ]
  return (
    <div className="App">
        {/* <Student fullName='Priyanshu Padeliya ' email='priyanshu@gmail.com' batchNo='12' /> */}
        {/* <Student fullName='Priyanshu Padeliya ' email='priyanshu@gmail.com' batchNo='12' />
        <Student fullName='Priyanshu Padeliya ' email='priyanshu@gmail.com' batchNo='12' /> */}
         {users.map((user,index) =>(
          <Student key={index} fullName={user.fullName} email={user.email} batchNo={user.batchNo} /> 
         ))}
    </div>
  );
}

export default App;
