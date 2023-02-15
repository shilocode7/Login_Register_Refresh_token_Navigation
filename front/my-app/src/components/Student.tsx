import React, { useEffect, useState } from 'react';
import { useAppSelector, useAppDispatch } from '../app/hooks';
import { loginAsync, logout, selectLogged, registerAsync, selectregisterd } from '../features/students/studentSlice';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export function Student() {
  const logged = useAppSelector(selectLogged);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useAppDispatch();
  const notify2 = () => toast(`Welcome ${username}!`);
  const registered = useAppSelector(selectregisterd);

  const setRemember = () => {
    let reme = localStorage.getItem("remember")
    if (reme !== null)
      return JSON.parse(reme)
  }
  const [remember, setremember] = useState(setRemember())

  useEffect(() => {
    console.log(localStorage.getItem("remember"))
    if (registered) {
      console.log(registered)
      notify2()
    }
    else {
      console.log("not registerd")
    }
  }, [registered])

  useEffect(() => {
    if (remember !== undefined){
      localStorage.setItem("remember", JSON.stringify(remember))
    }
  }, [registered])

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
        <h3>Login</h3>
        {logged ? <button onClick={() => dispatch(logout())}>logout</button> : ""}
        Username: <input onChange={(e) => setUsername(e.target.value)}></input><br />
        Password: <input type="password" onChange={(e) => setPassword(e.target.value)}></input><br />
        <button onClick={() => dispatch(loginAsync({ username, password }))}>Login</button><br />
      </div>
      Remember me<input onChange={(e) => setremember(e.target.checked)} type={'checkbox'}></input>
      {/* Uncomment the following code to enable registration functionality */}
      {/* <h3>Register</h3>
      Username: <input onChange={(e) => setUsername(e.target.value)}></input><br />
      Email: <input onChange={(e) => setEmail(e.target.value)}></input><br />
      Password: <input type="password" onChange={(e) => setPassword(e.target.value)}></input><br />
      <button onClick={() => {
        dispatch(registerAsync({ username, password, email: email || "no@email" }));
        notify();
      }}>Register</button>
      <ToastContainer theme="dark" /> */}
    </div>
  );
}
