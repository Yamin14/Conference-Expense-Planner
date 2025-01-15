
import React from 'react'
import {Helmet} from 'react-helmet'
import '../Styles/home.css'
import { useNavigate } from 'react-router-dom';

const Home = () => {
  //navigate
  let navigate = useNavigate();

  const productSelectionPage = () => {
    navigate("/product-selection");
  }

  //return
  return (
    <>
      <Helmet>
        <body className='homeBody'>
        </body>
      </Helmet>
        <div className='landing-page-bg'>
        </div>
  
        <div className='content'>
          <div className='head'>
            <h1>Conference Expense Planner</h1>
            <p>Plan your next major event with us!</p>
            <button onClick={productSelectionPage}>Get Started!</button>
          </div>
          
          <p className='body'>Welcome to the Conference Expense Planner by Kazmi Developers! We understand how overwhelming it can be to manage the costs of attending or organizing a conference. Our app simplifies the process by helping you easily track, categorize, and optimize your expenses. Whether you're a speaker, attendee, or event organizer, you'll have everything you need to stay within budget and focus on what really matters—connecting, learning, and growing. Let Kazmi Developers streamline your conference experience with smart, intuitive expense management at your fingertips!</p>
        </div>
    </>
  )
}

export default Home