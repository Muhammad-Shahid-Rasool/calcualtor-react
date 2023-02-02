
import './App.css';


import React, { useState } from 'react'

const App = () => {
  const[result,setResult]=useState("");

  return (
    <div className='calculator'>
      <input type="text"  value="0" id='ans' value={result}/>
      <input type="button" value="9" className='button'/>
      <input type="button" value="8" className='button'/>
      <input type="button" value="7"className='button'/>
      <input type="button" value="6"className='button'/>
      <input type="button" value="5"className='button'/>
      <input type="button" value="4"className='button'/>
      <input type="button" value="3"className='button'/>
      <input type="button" value="2"className='button'/>
      <input type="button" value="1"className='button'/>
      <input type="button" value="0"className='button'/>
      <input type="button" value="."className='button'/>
      <input type="button" value="+"className='button'/>
      <input type="button" value="-"className='button'/>
      <input type="button" value="*"className='button'/>
      <input type="button" value="/"className='button'/>
      <input type="button" value="%"className='button'/>
      <input type="button" value="clear"className='button button1'/>
      <input type="button" value="="className='button button1'/>
     


    </div>
  )
}

export default App