import React from 'react'
import '../../styles/Header.scss'
import HomeIcon from '@material-ui/icons/Home'
import FlashOnIcon from '@material-ui/icons/FlashOn'
import LiveTvIcon from '@material-ui/icons/LiveTv'
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary'
import SearchIcon from '@material-ui/icons/Search'
import PersonOutlineIcon from '@material-ui/icons/PersonOutline'

const Header = () => {
  return (
    <div className='container'>
      <div className='c-header'>
        <p>Wegrix Vids</p>
        <div className='c-header__icons'>
          <div className='c-header__icon c-header__icon--active'>
            <HomeIcon />
            <p>Home</p>
          </div>
          <div className='c-header__icon'>
            <FlashOnIcon />
            <p>Trending</p>
          </div>
          <div className='c-header__icon'>
            <LiveTvIcon />
            <p>Verified</p>
          </div>
          <div className='c-header__icon'>
            <VideoLibraryIcon />
            <p>Collections</p>
          </div>
          <div className='c-header__icon'>
            <SearchIcon />
            <p>Search</p>
          </div>
          <div className='c-header__icon'>
            <PersonOutlineIcon />
            <p>Account</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
