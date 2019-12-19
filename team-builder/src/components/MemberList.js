import React from 'react';
import {useState} from 'react';


const MemberList = props => {

    return (
        <div>
            {console.log(`this is props`, props)}
            {props.members.map(member => (
                <div>
                    <h2>{member.name}</h2>
                    <p>{member.email}</p>
                    <p>{member.role}</p>
                </div>
            ))}
        </div> 
    );
    
}


export default MemberList;