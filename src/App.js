import './App.css';
import { useState } from 'react';

const App = () => {

  // const [myName, setName] = useState('');

  // const [newName, UpdateName] = useState('');

  // const [country, newCountry] = useState('');

  // const [countryName, updateCountry] = useState('');

  // const Change = (event) => {
  //   UpdateName(event.target.value);
  // }
  // const ChangeCountry = (event) => {
  //   newCountry(event.target.value);
  // }

  // const SubmitForm = (event) => {
  //   event.preventDefault();
  //   setName(newName);
  //   updateCountry(country)
  // }
  const [myName,setMyName]=useState('');
  const formFilled = (event) => {
    event.preventDefault();
    setMyName(fullName.fName+' '+fullName.lName+' '+fullName.email+' '+fullName.number)
  }

  const [fullName, setFullName] = useState({
    fName: '',
    lName: '',
    email:'',
    number:''
  })

  const changeValue = (event) => {
    // const value = event.target.value;
    // const name = event.target.name;

    const {name,value} =event.target;
    setFullName((preValue) => {
      console.log(preValue);

      return{
        ...preValue,  // ye spread operator h iska use krke sara prevalue ka object hmne fullname me copy kr diya
        [name]:value  //jo yha pr name h means wo name jo hmne input me likha h agr wo name match kr jata
                     // h to value us name me assign ho jayegi , agr bina brackets ke likhe to object me
                     // new attribute add ho jayega 
      }
      // if (name === "fName") {
      //   return {
      //     fName: value,
      //     lName: preValue.lName,
      //     email:preValue.email
      //   }
      // } else if (name === "lName") {
      //   return {
      //     fName: preValue.fName,
      //     lName: value,
      //     email:preValue.email
      //   }
      // }else{
      //   return{
      //     fName:preValue.fName,
      //     lName: preValue.lName,
      //     email:value
      //   }
      // }
    })
  }
  return (
    <>
      {/* <form onSubmit={SubmitForm}>
        <div>
          <h1 style={{ textTransform: "uppercase" }}>Hello {myName} {countryName ? `from ${countryName}` : ``}</h1>
          <input type='text' placeholder='Enter Your Name' onChange={Change} value={newName}></input>
          <br />
          <input type='text' placeholder='Enter Your Country' onChange={ChangeCountry} value={country}></input>
          <button type='submit'>Submit</button>
        </div>
      </form> */}

      <form onSubmit={formFilled}>
        <div>
        <h1 style={{ textTransform: "uppercase" }}>Hello {myName}</h1>
          <input type='text' placeholder='Enter Your First Name' name='fName' onChange={changeValue}
            value={fullName.fName}></input>
          <br />
          <input type='text' placeholder='Enter Your Last Name' name='lName' onChange={changeValue}
            value={fullName.lName}></input>
            <br/>
            <input type='email' placeholder='Enter Your Email' name='email' onChange={changeValue}
            value={fullName.email}></input>
            <br/>
            <input type='number' placeholder='Enter Your Number' name='number' onChange={changeValue}
            value={fullName.number}></input>
          <button type='submit'>Submit</button>
        </div>
      </form>
    </>
  )
}

export default App;
