import { useEffect, useState } from 'react'
import Heading from './Heading'
import { useDispatch, useSelector } from 'react-redux'
import { setPeople, toggle } from '../store/mealsSlice'
import { RootState } from '../store/store'

const MealsSelection = () => {

  //get meals and number of people
  const meals = useSelector((state: RootState) => state.meals.meals);
  const noOfPeople = useSelector((state: RootState) => state.meals.noOfPeople);
  const [total, setTotal] = useState(0);
  const dispatch = useDispatch();

  //calculate total price
  useEffect(() => {
    let selectedMeals = meals.filter(meal => meal.selected);

    let temp = selectedMeals.map(meal => meal.price * noOfPeople).reduce((acc, price) => acc + price, 0);
    setTotal(temp);
    }, [meals, noOfPeople]);

  //return
  return (
    <div id='meals'>
      <Heading heading='Meals Selection' />

      <div id='noOfPeople'>
        <label htmlFor="">No. of People: </label>
        <input type="number" defaultValue={noOfPeople} min={2} max={50} 
          onKeyDown={(e) => e.preventDefault()}
          onChange={(e) => dispatch(setPeople(e.target.value))} />
      </div>

      <div className='meals'>
        {meals.map((meal) => {
          return (
            <div className="meal">
              <input id={meal.name} type="checkbox" defaultChecked={meal.selected}
                onChange={() => dispatch(toggle(meal.name))} />
              <label htmlFor={meal.name}>{meal.name}</label> <br />
              <label htmlFor="">${meal.price}</label>
            </div>
          )
        })}
      </div>

      <p className='total'>Total: ${total}</p>
    
    </div>
  )
}

export default MealsSelection