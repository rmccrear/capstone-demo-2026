import { useState } from 'react'
import './App.css'

import { supabase } from './utils/supabase'

function App() {
  const [meals, setMeals] = useState([])
  
  async function handleCheckMeals(){
    console.log("handle clicked")
    const { data, error } = await supabase.from("meals").select()
    console.log(data)
    console.log(error)
    setMeals(data)
  }

  return (
    <div class="container">
      <h1>Potluck Joy</h1>
      <p>You have {meals.length} meals</p>
      <button onClick={handleCheckMeals}>
        Check Meals
      </button>
    </div>
  )
}

export default App
