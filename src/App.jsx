import { useState } from 'react'
import MealCard from './MealCard'
import './App.css'

import { supabase } from './utils/supabase'

function App() {
    const [meals, setMeals] = useState([])

    async function handleCheckMeals() {
        console.log("handle clicked")
        const { data, error } = await supabase.from("meals").select()
        console.log(data)
        console.log(error)
        const largeMeals = data.filter((meal) => meal.serves > 10)
        console.log(largeMeals)
        setMeals(data)
    }

    return (
        <div className="container">
            <h1>Potluck Joy</h1>
            <p>You have {meals.length} meals</p>
            {meals.map(meal => <MealCard mealData={meal} />)}
            <button onClick={handleCheckMeals}>
                Check Meals
            </button>
        </div>
    )
}

export default App
