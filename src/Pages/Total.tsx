
import { useEffect, useState } from 'react'
import '../Styles/total.css'
import { Helmet } from 'react-helmet'
import { useSelector } from 'react-redux'
import { RootState } from '../store/store'

const Total = () => {

    //get rooms
    const rooms = useSelector((state: RootState) => state.rooms.rooms);
    const addOns = useSelector((state: RootState) => state.addOns.addOns);

    const meals = useSelector((state: RootState) => state.meals.meals)
        .filter(meal => meal.selected);
    const noOfPeople = useSelector((state: RootState) => state.meals.noOfPeople);

    //estimating total cost
    const [total, setTotal] = useState(0);
    useEffect(() => {
        
        let temp = rooms.map(room => room.price * room.quantity)
            .reduce((acc, price) => acc + price, 0);
        temp += addOns.map(addOn => addOn.price * addOn.quantity)
            .reduce((acc, price) => acc + price, 0);
        temp += meals.map(meal => meal.price * noOfPeople)
            .reduce((acc, price) => acc + price, 0);

        setTotal(temp);
    }, [rooms, addOns, meals, noOfPeople]);

    //return
    return (
    <>
        <Helmet>
            <body className='totalBody'>
            </body>
        </Helmet>
        
        <h1 id='totalHeading'>Total Cost For The Event</h1>
        <h1 id="total">${total}</h1>

        <table>
            <tr>
                <th>Name</th>
                <th>Unit Cost</th>
                <th>Quantity</th>
                <th>Total Cost</th>
            </tr>

            {rooms.filter(room => room.quantity > 0).map((room) => {
                return (<tr>
                    <td>{room.name} (Capacity: {room.capacity})</td>
                    <td>${room.price}</td>
                    <td>{room.quantity}</td>
                    <td>${room.price * room.quantity}</td>
                </tr>);
            })}

            {addOns.filter(addOn => addOn.quantity > 0).map((addOn) => {
                return (<tr>
                    <td>{addOn.name}</td>
                    <td>${addOn.price}</td>
                    <td>{addOn.quantity}</td>
                    <td>${addOn.price * addOn.quantity}</td>
                </tr>);
            })}

            {noOfPeople > 0 && meals.filter(meal => meal.selected).map((meal) => {
                return (<tr>
                    <td>{meal.name}</td>
                    <td>${meal.price}</td>
                    <td>For {noOfPeople} people</td>
                    <td>${meal.price * noOfPeople}</td>
                </tr>);
            })}

        </table>
    </>
  )
}

export default Total