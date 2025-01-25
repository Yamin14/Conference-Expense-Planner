
import { useNavigate } from 'react-router-dom';

const NavBar = () => {

  const navigate = useNavigate();

  const homePage = () => {
    navigate("/conference-expense-planner");
  }

  const totalPage = () => {
    navigate("/total");
  }

  return (
    <div className='navbar'>
        <h1 className='text-yellow' onClick={homePage}>Conference Expense Planner</h1>

        <div className='buttons'>
            <a href="#venue">Venue</a>
            <a href="#addOns">Add-ons</a>
            <a href="#meals">Meals</a>
        </div>

        <div className='buttonDiv'>
          <button onClick={totalPage}>Show Details</button>
        </div>
    </div>
  )
}

export default NavBar