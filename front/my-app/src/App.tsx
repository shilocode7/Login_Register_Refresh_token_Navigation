import React, { useEffect } from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import { Student } from './components/Student';
import { useAppDispatch, useAppSelector } from './app/hooks';
import { logout, refreshAsync, selectLogged ,selectuserName} from './features/students/studentSlice';
import Register from './components/Register';
import { Link, Outlet } from 'react-router-dom';
//import { selectuserName } from '/../../profile/profiletSlice';
// import username from 
import back from './images/background.jpg'

const styles = {
  backgroundImage: `url(${back})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  height: '100vh'
};

function App() {
  const logged = useAppSelector(selectLogged);
  const dispatch = useAppDispatch();
  const uName = useAppSelector(selectuserName);

  useEffect(() => {

    const token = localStorage.getItem("refresh")
    let reme=localStorage.getItem("remember")
    if(reme !== null)
        if(JSON.parse(reme)===true)
        {
        if (token)
            dispatch(refreshAsync(token))
    }
}, [])
  
  
  return (
    <div className="App" style={styles}>
      <header className="App-header">
      <nav >
        {/* כפתור מבוטסטראפת קישור באינדקס בפאבליק ליד הטייטל */}
        <Link className="btn btn-success" to='/Login'>Login</Link>|{" "}
        <Link className="btn btn-outline-danger" to='/Register'>Register</Link>|{" "}
        <Link className="btn btn-light" to='/Test'>Test</Link>|{" "}
        <Link to='/Category'>Category</Link>|{" "}

      </nav>
      <h1 style={{color: 'white'}}>Welcom {uName}</h1>
      <Outlet></Outlet>
      </header>
    </div>
  );
}
//{username}
export default App;


{/* <h2>welcome {uName} </h2>
      {logged ? <div><button onClick={() => dispatch(logout())}>logout</button>
      </div> :
        <Student />}<hr></hr><Register /> */}