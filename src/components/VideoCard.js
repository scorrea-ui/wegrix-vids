import React, { forwardRef } from 'react'
import TextTruncate from 'react-text-truncate'
import ThumbUpIcon from '@material-ui/icons/ThumbUp'
import { notification } from 'antd'
import '../styles/VideoCard.scss'

const baseUrl = 'https://image.tmdb.org/t/p/original/'

const getTrailer = (result) => {
  if (result.data.results.length >= 1) {
    window.open(`https://www.youtube.com/watch?v=${result.data.results[0].key}`)
  } else {
    notification['error']({
      message: 'Error',
      description: 'No Trailer found.',
    })
  }
}

const VideoCard = forwardRef(({ movie, getMovie, getTv }, ref) => {
  return (
    <div className='c-videoCard' ref={ref}>
      <img
        src={`${baseUrl}${movie.backdrop_path || movie.poster_path}`}
        alt={movie.title}
      />
      <h3 className='c-videoCard__title'>{movie.title || movie.name}</h3>
      <TextTruncate
        line={1}
        className='c-videoCard__overview'
        element='p'
        truncateText='...'
        text={movie.overview}
      />
      <p className='c-videoCard__stats'>
        <span
          className={
            movie.media_type || movie.media_type ? 'c-videoCard__type' : ''
          }
        >
          {movie.media_type && `${movie.media_type}`}
        </span>
        <span className='c-videoCard__date'>
          {movie.release_date || movie.first_air_date}
        </span>
        <span className='c-videoCard__count'>{movie.vote_average}</span>
        <ThumbUpIcon />
      </p>
      <button
      className="c-videoCard__watch"
        onClick={async () => {
        if(movie.media_type === 'movie') {
            const result = await getMovie()
            getTrailer(result)
        } else {
            const result = await getTv()
            getTrailer(result)
        }
        }}
      >
        Watch trailer
      </button>
    </div>
  )
})

export default VideoCard
