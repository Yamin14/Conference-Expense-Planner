
import React from 'react'
import '../Styles/total.css'
import { Helmet } from 'react-helmet'
import { useSelector } from 'react-redux'
import { RootState } from '../store/store'

const Total = () => {

    //get rooms
    const rooms = useSelector((state: RootState) => state.rooms.rooms);
    const addOns = useSelector((state: RootState) => state.addOns.addOns);
    const meals = useSelector((state: RootState) => state.meals.meals);
    const noOfPeople = useSelector((state: RootState) => state.meals.noOfPeople);

    return (
    <>
        <Helmet>
            <body className='totalBody'>
            </body>
        </Helmet>
        
        <h1>Total Cost For The Event</h1>
        <h1>$</h1>

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
        </table>
    </>
  )
}

export default Total