import { useState } from 'react'
import './App.css'
import User from './components/user'

function App() {
  
  const user =[{"first_Name":"Doe","Last_Name":"Jane","age":45,"hair_color":"black"},
  {"first_Name":"Smith","Last_Name":"John","age":88,"hair_color":"brown"}]
  return (
    <>
        <div className="puttingittoghether">
            <User user={user}/>
        </div>
    </>
  )
}

export default App