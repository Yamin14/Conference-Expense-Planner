
import { decremenet, incremenet } from '../store/roomSlice'
import { useDispatch } from 'react-redux'

interface Props {
    "room": any
}

const Room = ({room} : Props) => {

    const dispatch = useDispatch();

    return (
        <div className='item'>
            <img src={room.img} />
            <p>{room.name}</p>
            <p>(Capacity:{room.capacity})</p>
            <p>${room.price}</p>

            <div className='incrementButtons'>
                <button className='decBtn' onClick={() => dispatch(decremenet(room.name))}>-</button>
                {room.quantity}
                <button className='incBtn' onClick={() => dispatch(incremenet(room.name))}>+</button>
            </div>
        </div>
    )
}

export default Room