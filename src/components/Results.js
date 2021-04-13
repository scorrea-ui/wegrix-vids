import React, { useState, useEffect } from 'react'
import { getMovie, getTV } from '../api/requests'
import '../styles/Results.scss'
import VideoCard from './VideoCard'
import axios from '../api/axios'

const Results = ({ selectedOption }) => {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const request = await axios.get(selectedOption)
      setMovies(request.data.results)
      return request
    }

    fetchData()
  }, [selectedOption])

  return (
    <div className='container'>
      <div className='c-results'>
        <div>
          {movies.map((movie, index) => {
            return (
              <VideoCard
                selectedOption={selectedOption}
                movie={movie}
                key={!isNaN(movie.title) ? movie.title + index : index}
                getMovie={() => getMovie(movie.id)}
                getTv={() => getTV(movie.id)}
              />
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Results
