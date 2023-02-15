import React, { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../app/hooks'
import { loginAsync, logout, selectLogged, registerAsync, selectregisterd } from '../features/students/studentSlice';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Register = () => {
  const logged = useAppSelector(selectLogged);
  const [username, setusername] = useState("")
  const [password, setpassword] = useState("")
  const [email, setemail] = useState("")
  const dispatch = useAppDispatch();
  const notify = () => toast("NEW User Born!");
  const registerd = useAppSelector(selectregisterd);
  useEffect(() => {
    if (registerd) {
      console.log(registerd)
      notify()
    }
    else {
      console.log("not registerd")
    }
  }, [registerd])
  const setRemember = () => {
    let reme = localStorage.getItem("remember")
    if (reme !== null)

      return JSON.parse(reme)
  }
  const [remember, setremember] = useState(setRemember())//JSON.parse( localStorage.getItem("remember")|| "false"))
  useEffect(() => {
    console.log( localStorage.getItem("remember"))
    if(registerd){
    console.log(registerd)
    notify()
    }
    else{
        console.log("not registerd")
    }
}, [registerd])

useEffect(() => {
 localStorage.setItem("remember",JSON.stringify( remember))
}, [remember])

 // Add some basic styles to the component to make the text brighter and more visible
 const styles = {
  color: 'white',
  backgroundColor: 'rgba(255, 255, 255, 0.2)',
  padding: '20px',
  borderRadius: '5px'
}
  return (
    <div style={styles}>
      <div>
      <h3>register</h3>
      {logged?<button onClick={()=>dispatch(logout())}>logout</button>:""}
      Username : <input onChange={(e) => setusername(e.target.value)}></input><br></br>
      Email : <input onChange={(e) => setemail(e.target.value)}></input><br />
      password: <input type={"password"} onChange={(e) => setpassword(e.target.value)}></input><br />
      <button onClick={() => {
        dispatch(registerAsync({ username, password, email: email || "no@email" }))
        notify();
      }}>Register</button>
      Remember me<input onChange={(e)=>setremember(e.target.checked)}  type={'checkbox'}></input>
      <ToastContainer theme='dark' />
    </div>
    </div>
  )
}

export default Register