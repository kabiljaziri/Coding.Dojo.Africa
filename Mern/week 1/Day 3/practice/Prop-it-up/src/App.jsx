import React from 'react'
import './App.css'
import Details from './components/details';

function App() {
  const person1 = [{
    first_name: "Anis",
    last_name: "Rouis",
    age: 28,
    hair: "Black"}
  ,
  {
    first_name: "Med Souleim",
    last_name: "Ben Said",
    age: 26,
    hair: "Black"}
  ,
  {
    first_name: "Med Alaa",
    last_name: "Fehri",
    age: 20,
    hair: "Brown"}
  ,
  {
    first_name: "Jasser",
    last_name: "Boulila",
    age: 18,
    hair: "Dark Brown"
  }]
  return (
    <>
        <fieldset>
          <legend>First Person</legend>
          <Details person={person1} />
        </fieldset>
      
    </>
  )
}

export default App
