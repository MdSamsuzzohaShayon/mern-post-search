import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'semantic-ui-css/semantic.min.css';
import Navbar from './components/Navbar';
import Posts from './components/Posts';
import AdminPanel from './components/admin/AdminPanel';


function App() {
  return (
    <div className="App">
      {/* <Navbar /> */}
      {/* <Posts /> */}
      <AdminPanel />


    </div>
  );
}

export default App;
