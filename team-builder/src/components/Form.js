import React from 'react';
import { useState } from 'react';

const Form = (props) => {
    const [member, setMember] = useState({
        name: '',
        email: '',
        role: ''
    });
    const handleChanges = e => {
        setMember({
          ...member,
          [e.target.name]: e.target.value
        });
        console.log(e.target.name);
      };

    const submitForm = e => {
        e.preventDefault();
        props.addNewMember(member);
        setMember({name: '', email: '', role: ''})
    }
    return (
        <form onSubmit={submitForm}>
            <label htmlFor="name">First Name</label>
            <input
                id="name"
                type="text"
                placeholder="Name"
                onChange={handleChanges}
                name="name"
                
                value={member.name}/>
            <br/>
            <label htmlFor="email">email</label>
            <input
                name="email"
                placeholder="email"
                onChange={handleChanges}
                id="email"
                type="email"
                value={member.email}/>
            <br/>
            <label htmlFor="role">role</label>
            <input
                id="role"
                name="role"
                placeholder="role"
                onChange={handleChanges}
                type="text"
                value={member.role}/>
            <br/>
            <input type="submit"/>
        </form>
    )
}
export default Form;