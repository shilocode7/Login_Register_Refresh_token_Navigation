import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './app/store';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Student } from './components/Student';
import Register from './components/Register';
import Test from './components/Test';
import Category from './components/Category';
import Prouduct from './components/Prouduct';

const container = document.getElementById('root')!;
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<App />} >
            <Route path='/Login' element={<Student />} />
            <Route path='/Register' element={<Register />} />
            <Route path='/Test' element={<Test />} />
            <Route path='/Category' element={<Category />}>
              <Route path=':catID' element={<Prouduct />}/>
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
