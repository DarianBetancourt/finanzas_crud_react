import './App.css';
import React, { useState, UseEffect, useEffect} from 'react';
import Header from './components/Header/Header.js';
import Resume from './components/Resume/Resume';
import Form from './components/Form/Form';
import Grid from './components/Grid/Grid';
import axios from 'axios';

function App() {
  const url = "http://localhost:5000/transactions";
  const [transactions, setTransactions ] = useState([]);
 
  const getTransactions = async () => {
    try {
      const res = await axios.get(url);
      console.log(res.data);
      setTransactions(res.data);
    } catch (error) {
      console.log(error);
    }
  }

  
  useEffect(() => {
    getTransactions();
  }, [setTransactions])

  const handleAdd = async (transaction) => {
    const res = await axios.post( url, transaction );
    
    if(res.statusText == "Created"){
      getTransactions();
    }
    if(res.statusText != "Created" || res.status != 201){
      console.log("ocurrió un error al adicionar la transaccion");
    }
  }
  
  const handleDelete = async (id) => {
    console.log("delete")
    const res = await axios.delete( url+"/"+id );

    if(res.status == 200){
      getTransactions();
    }
    if(res.status != 200){
      console.log("ocurrió un error al eliminar la transacción");
    }
  }

  return (
    <div className="App">
      <Header title="Control Financiero"/>
      <div className="app-container">
        <Resume transactions ={transactions}/>
        <div className="app-group-container">
          <Form handleAdd={handleAdd}/>
          <Grid transactions={ transactions } handleDelete={ handleDelete }/>
        </div>
      </div>

    </div>
  );
}

export default App;
