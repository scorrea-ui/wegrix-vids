import React, { useState, useEffect } from 'react'
import { getMovie } from '../api/requests'
import '../styles/Results.scss'
import VideoCard from './VideoCard'
import FlipMove from 'react-flip-move'
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
        <FlipMove>
          {movies.map((movie, index) => {
            return (
              <VideoCard
                movie={movie}
                key={!isNaN(movie.title) ? movie.title + index : index}
                getMovie={() => getMovie(movie.id)}
              />
            )
          })}
        </FlipMove>
      </div>
    </div>
  )
}

export default Results
