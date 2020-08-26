import React from 'react'
import { requests } from '../api/requests'
import '../styles/Nav.scss'

export const Nav = ({ setSelectedOption }) => {
  return (
    <div className='c-nav'>
      <div className='container'>
        <ul>
          <li>
            <button onClick={() => setSelectedOption(requests.fetchTrending)}>
              Trending
            </button>
          </li>
          <li>
            <button onClick={() => setSelectedOption(requests.fetchTopRated)}>
              Top Rated
            </button>
          </li>
          <li>
            <button
              onClick={() => setSelectedOption(requests.fetchPlaying)}
            >
              Playing
            </button>
          </li>
          <li>
            <button
              onClick={() => setSelectedOption(requests.fetchComedyMovies)}
            >
              Comedy
            </button>
          </li>
          <li>
            <button
              onClick={() => setSelectedOption(requests.fetchHorrorMovies)}
            >
              Horror
            </button>
          </li>
          <li>
            <button
              onClick={() => setSelectedOption(requests.fetchRomanceMovies)}
            >
              Romance
            </button>
          </li>
          <li>
            <button onClick={() => setSelectedOption(requests.fetchScifi)}>
              Sci-Fi
            </button>
          </li>
          <li>
            <button onClick={() => setSelectedOption(requests.fetchWestern)}>
              Western
            </button>
          </li>
          <li>
            <button onClick={() => setSelectedOption(requests.fetchAnimation)}>
              {' '}
              Animation
            </button>
          </li>
          <li>
            <button onClick={() => setSelectedOption(requests.fetchTV)}>
              TV Shows
            </button>
          </li>
        </ul>
      </div>
    </div>
  )
}
