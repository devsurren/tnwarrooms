import React from 'react';
import { Link } from 'react-router-dom';

const Navbar=()=>{
    return(
        <>
            <nav className='bg-blue-500 h-12 font-roboto font-bold text-white text-lg p-2 flex align-center justify-between'>
                    <div className=' flex flex-row justify-between'>
                    <i class="fas fa-book-reader fa-1x my-1 pr-2  "></i>
                       <h1>TN-War-Rooms</h1>
                    </div>

                    <div>
                        <ul className='flex'>
                            <li className='mx-1 '><Link to='/'>Home</Link></li>
                            <li className='mx-1 '><Link to='/about'>About</Link></li>
                            <li className='mx-1 '><Link to='/contact'>Contact</Link></li>
                        </ul>
                    </div>
            </nav>
        </>
    );
}

export default Navbar;