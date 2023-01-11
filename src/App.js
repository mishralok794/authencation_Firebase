
import { useState } from 'react';
import './App.css';
import { auth } from './firebase'
import { createUserWithEmailAndPassword,signInWithEmailAndPassword } from 'firebase/auth';
import { async } from '@firebase/util';


function App() {

  let [user,setUser]=useState({
    loginEmail:"",
    loginPassword:"",
    registerEmail:"",
    registerPssword:""
  })

  // let [email, setEmail] = useState("");
  // let [emailPwd, setEmailPwd] = useState("");

  async function register() {
    try {
      let user1 = await createUserWithEmailAndPassword(auth, user.registerEmail, user.registerPssword);
      console.log(user1)
      console.log("registered sucessful")
    } catch (error) {
      console.log(error.message);
      console.log("not created")
    }
    console.log(user.registerEmail,user.registerPssword)
  }

 async function login(){
        try{
       let user1=await signInWithEmailAndPassword(auth, user.loginEmail,user.loginPassword);
       console.log(user1);
       console.log("sucess full") 
        }catch(error){
          console.log(error.message);
          console.log("user Not defined")
        }
 }
  

  function handleData(e){
    // console.log("input block")
    // console.log('email=>',user.loginEmail,"pwd=>",user.loginPassword);
    let name=e.target.name;
   let value=e.target.value;
    setUser({...user,[name]:value});
    // console.log('email=>',user.loginEmail,"pwd=>",user.loginPassword);
  }

  // console.log("email")
  console.log(user);
  // console.log(user.loginEmail);
  return (
    <div className="App">

      <div className='email'>
      <h3 className='emailHeader'>Register</h3>
        <div className='mt-2' >Enter Your E-mail
          <input className="form-control " type='email' placeholder='enter your email'  name='registerEmail' onChange={handleData} />
        </div>

        <div className=' mt-4 ' >Enter Your Password
          <input className="form-control  " type='password' placeholder='enter your password' name='registerPssword' onChange={handleData} />
        </div>

        <button onClick={register} className='btn btn-primary mt-2 float-end'>Register</button>

      </div>

      <div className='email'>
      <h3 className='emailHeader'>Login</h3>
        <div className='mt-2' >Enter Your E-mail
          <input className="form-control " type='email' placeholder='enter your email'  name='loginEmail' onChange={handleData} />
        </div>

        <div className=' mt-4 ' >Enter Your Password
          <input className="form-control  " type='password' placeholder='enter your password' name='loginPassword' onChange={handleData} />
        </div>

        <div>
        {user.registerEmail && user.loginEmail}
        <button onClick={login} className='btn btn-primary mt-2 float-end'>Login</button>
        </div>

      </div>

    </div>
  );
}

export default App;
