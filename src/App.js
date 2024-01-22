import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

const App =()=>{

  const [myName,setName]=useState('');

  const [newName,UpdateName]=useState('');

  const [country,newCountry]=useState('');

  const [countryName,updateCountry]=useState('');

  const Change =(event)=>{
    UpdateName(event.target.value);
  }
  const ChangeCountry =(event)=>{
    newCountry(event.target.value);
  }

  const SubmitForm =(event)=>{
    event.preventDefault();
    setName(newName);
    updateCountry(country)
  }
  return(
    <>
    <form onSubmit={SubmitForm}>
    <div>
      <h1 style={{textTransform:"uppercase"}}>Hello {myName} {countryName?`from ${countryName}`:``}</h1>
      <input type='text' placeholder='Enter Your Name' onChange={Change} value={newName}></input>
      <br/>
      <input type='text' placeholder='Enter Your Country' onChange={ChangeCountry} value={country}></input>
      <button type='submit'>Submit</button>
      </div>
      </form>
    </>
  )
}

export default App;
