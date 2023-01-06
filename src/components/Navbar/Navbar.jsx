import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
  return (
    <header>
        <nav>
            <div className='left'>
                <h4>Authentication | redux</h4>
            </div>
            <div className='right'>
                <ul>
                    <li>
                        <Link className='link' to='/'>HOME</Link>
                    </li>
                    <li>
                        <Link className='link' to='/login'>LOGIN</Link>
                    </li>
                    <li>
                        <Link className='link' to='/register'>REGISTER</Link>
                    </li>
                </ul>
            </div>
        </nav>
    </header>
  )
}

export default Navbar