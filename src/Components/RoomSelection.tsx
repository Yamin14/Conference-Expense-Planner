import { useEffect, useState } from 'react'
import Heading from './Heading'
import Room from './Room'
import { useSelector } from 'react-redux'
import { RootState } from '../store/store'

const RoomSelection = () => {

  const rooms = useSelector((state: RootState) => state.rooms.rooms);
  const [total, setTotal] = useState(0);

  //calculate total price
  useEffect(() => {
    let temp = rooms.map(room => room.price * room.quantity).reduce((acc, price) => acc + price, 0);
    setTotal(temp);
    }, [rooms]);

  //return
  return (
    <div id='venue'>
      <Heading heading='Venue Room Selection' />

      <div className='grid'>

        {rooms.map((room) => {
          return <Room room={room} />;
        })}

      </div>

      <p className='total'>Total: ${total}</p>

    </div>
  )
}

export default RoomSelection