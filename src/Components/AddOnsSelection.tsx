import React, { useEffect, useState } from 'react'
import Heading from './Heading'
import addOns from '../store/addOns';
import AddOn from './AddOn';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';

const AddOnsSelection = () => {

  const addOns = useSelector((state: RootState) => state.addOns.addOns);
  const [total, setTotal] = useState(0);

  //calculate total price
  useEffect(() => {
    let temp = addOns.map(addOn => addOn.price * addOn.quantity).reduce((acc, price) => acc + price, 0);
    setTotal(temp);
  }, [addOns]);
    
  return (
    <div id='addOns'> 
      <Heading heading='Add-ons Selection' />

      <div className='grid'>

        {addOns.map((addOn) => {
          return <AddOn addOn={addOn} />;
        })}
      </div>

      <p className='total'>Total: ${total}</p>

    </div>
  )
}

export default AddOnsSelection