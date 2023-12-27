import React from 'react'
import { useSelector } from 'react-redux'
import {Link} from "react-router-dom"
import { HOME_ICON, LIVE_ICON, SHORTS_ICON, VIDEO_ICON } from './constants';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMusic,faVolleyball,faHeadset,faFilm } from '@fortawesome/free-solid-svg-icons';

const Sidebar = () => {
    const isMenuOpen=useSelector(store=>store.app.isMenuOpen);

    if(!isMenuOpen) return null;//Early return
  return (
    <div className='p-5 shadow-lg w-48'>
        <ul>
            <div>
                <div className='flex'>
                <li className='m-2'>{HOME_ICON}</li>
            <li> 
                <Link to="/" className='relative top-1'>Home</Link>
            </li>
               </div>
               <div className='flex'>
                <li className='m-2 relative right-1 bottom-1'>{SHORTS_ICON}</li>
                <li className='relative'>Shorts</li>
               </div>
               <div className='flex'>
                <li className='m-2 relative right-1 bottom-1'>{VIDEO_ICON}</li>
                <li className='relative'>Videos</li>
               </div>
               <div className='flex'>
                <li className='m-2 relative right-1 bottom-1'>{LIVE_ICON}</li>
                <li className='relative'>Live</li>
               </div>
            </div>
        </ul>
        <h1 className='font-bold pt-4 pb-3'>Subscriptions</h1>
        <ul>
            <div className='flex'>
            <li className='m-2 relative right-1 bottom-1'><FontAwesomeIcon icon={faMusic} /></li>
            <li>Music</li>
            </div>
            <div className='flex'>
            <li className='m-2 relative right-1 bottom-1'><FontAwesomeIcon icon={faVolleyball} /></li>
            <li>Sports</li>
            </div>
            <div className='flex'>
            <li className='m-2 relative right-1 bottom-1'><FontAwesomeIcon icon={faHeadset} /></li>
            <li>Gaming</li>
            </div>
            <div className='flex'>
            <li className='m-2 relative right-1 bottom-1'><FontAwesomeIcon icon={faFilm} /></li>
            <li>Movies</li>
            </div> 
        </ul>
        <h1 className='font-bold pt-4 pb-2'>Watch Later</h1>
        <ul>
            <div className='flex'>
            <li className='m-2 relative right-1 bottom-1'><FontAwesomeIcon icon={faMusic} /></li>
            <li>Music</li>
            </div>
            <div className='flex'>
            <li className='m-2 relative right-1 bottom-1'><FontAwesomeIcon icon={faVolleyball} /></li>
            <li>Sports</li>
            </div>
            <div className='flex'>
            <li className='m-2 relative right-1 bottom-1'><FontAwesomeIcon icon={faHeadset} /></li>
            <li>Gaming</li>
            </div>
            <div className='flex'>
            <li className='m-2 relative right-1 bottom-1'><FontAwesomeIcon icon={faFilm} /></li>
            <li>Movies</li>
            </div> 
        </ul>
    </div>
  )
}

export default Sidebar