

function MealCard({mealData}) {
    // const mealData = data.mealData

    return (
        <article>
            <h5>Meal: {mealData.meal_name} </h5>
            <p>Serves: {mealData.serves} ... Brought by: {mealData.guest_name}</p>
        </article>
    )
}

export default MealCard