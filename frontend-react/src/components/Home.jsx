import React from 'react'
import Button from './Button'

const Home = () => {
  return (
    <>
    

    <div className='container mt-5 pb-5'>
      <div className='p-5  text-center text-light bg-light-dark'>
        <h1>Stock Prediction Portal</h1>
        <p className='lead'>This stock prediction application utilizes machine learning techniques, specifically employing Keras, and LSTM model, integrated within the Django framework. It forecasts future stock prices by analyzing 100-day and 200-day moving averages, essential indicators widely used by stock analysts to inform trading and investment decisions.</p>
        <Button text='Login' class='btn-outline-info'/>

      </div>

    </div>
      
    </>
  )
}

export default Home
