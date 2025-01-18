
import { useDispatch } from 'react-redux'
import { decremenet, incremenet } from '../store/addOnSlice';

interface Props {
    "addOn": any
}

const AddOn = ({addOn} : Props) => {

    const dispatch = useDispatch();

    return (
        <div className='item'>
            <img src={addOn.img} />
            <p>{addOn.name}</p>
            <p>${addOn.price}</p>

            <div className='incrementButtons'>
                <button className='decBtn' onClick={() => dispatch(decremenet(addOn.name))}>-</button>
                {addOn.quantity}
                <button className='incBtn' onClick={() => dispatch(incremenet(addOn.name))}>+</button>
            </div>
        </div>
  )

}

export default AddOn;