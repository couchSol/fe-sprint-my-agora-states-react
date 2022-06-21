import React, { useEffect, useState } from 'react';
import Form from './Form.js'
import Discussion from './Discussion.js';
import './App.css';

function App() {
  let [discussion, setDiscussion] = useState([])
  useEffect(()=>{
      fetch('http://localhost:3002/discussions')
      .then(res => res.json())
      .then(res => setDiscussion(res))
  }, [])
  
  function submitHandler(newDiscussion){
    console.log(newDiscussion)
    setDiscussion([newDiscussion, ...discussion])
  }

  return (
      <main>
        <h1>My Agora States</h1>
        <section className="form__container">
          <Form submitHandler={submitHandler}/>
        </section>
        <section className="discussion__wrapper">
          <Discussion discussion={discussion}/>      
        </section>
      </main>
  );
}

export default App;
