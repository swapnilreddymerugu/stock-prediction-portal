import React from 'react'
import Button from './Button'

const Header = () => {
  return (
    <div>
        <nav className='navbar container pt-4 pb-5'>
            <a className='navbar-brand text-light' href=''>Stock Prediction Portal</a>
            <div>
                <Button text='Login' class='btn-outline-info'/>
                &nbsp;
                <Button text='Register' class='btn-info'/>
            </div>
        </nav>
      
    </div>
  )
}

export default Header
