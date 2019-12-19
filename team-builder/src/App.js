import React from 'react';
import logo from './logo.svg';
import './App.css';
import {useState} from 'react';
import MemberList from './components/MemberList';
import Form from './components/Form';

function App() {
  const [members, setMembers] = useState([{
    id: 1,
    name: 'cody',
    email: 'cody@cody.com',
    role: 'web dev'
}]);
  console.log(`this is app.js members`, members);
  const addNewMember = member => {
    const newMember = {
      id: Date.now(),
      name: member.name,
      email: member.email,
      role: member.role
    };
    setMembers([...members, newMember]);
  }
  return (
    <div className="App">
      <MemberList members={members}/>
      <Form addNewMember={addNewMember} />
    </div>
  );
}

export default App;
