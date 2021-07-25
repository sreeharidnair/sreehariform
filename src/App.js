//import logo from './logo.svg';
import React,{useState} from 'react'
import './App.css';

function App() {

  const [firstname,setfirstname]=useState('');
  const [lastname,setlastname]=useState('');
  const [email,setemail]=useState('');
  const [sub,setsub]=useState('React');

 const handlefirstname=(e)=>{
  setfirstname(e.target.value);
}
const handlelastname=(e)=>{
  setlastname(e.target.value);
}
const handleemail=(e)=>{
  setemail(e.target.value);
}
const handlesub=(e)=>{
  setsub(e.target.value);
}
const handlesubmit=(e)=>{
  alert(`firstname: ${firstname} \nlastname: ${lastname} \nemail: ${email} \nsub: ${sub}`)
  e.prevantDefault();
}

  return (
    <div className="App">
       <nav>
            <ul className="Navbarstyle">
                <li className="Navbarelements ">HOME</li> 
            </ul>
        </nav>

         <h2 className="changeheading">Assignment Done By</h2>
         <h2 className="changeheading">Name: Sreehari D Nair</h2>
         <h2 className="changeheading">Rollno: 20181CSE0704</h2>

       <div className="registeration">
                <h1 className="head">Registeration Form</h1>
                <form onSubmit={handlesubmit}>
                    <div className="names"><label >First Name<input type="text" className="space" placeholder="Enter Your First Name" value={firstname} onChange={handlefirstname}></input></label> </div>
                    <div className="names"> <label >Last Name<input type="text" className="space" placeholder="Enter Your Last Name" value={lastname} onChange={handlelastname}></input></label> </div>
                    <div className="names"><label >Email<input type="text" className="space" placeholder="Enter Your Email Id" value={email} onChange={handleemail}></input></label> </div>
                    <div className="names"><label >Subject<select className="space" value={sub} onChange={handlesub}><option>React</option><option>Angular</option><option>Vue</option></select></label></div>
                    <div className="names"><button type="submit">Submit</button></div>
                </form>
            </div>
    </div>
  );
}

export default App;
