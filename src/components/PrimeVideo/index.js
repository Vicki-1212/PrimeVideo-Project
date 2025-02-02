import MoviesSlider from '../MoviesSlider'
import './index.css'

const PrimeVideo = props => {
  const {moviesList} = props
  const actionMoviesList = moviesList.filter(
    eachMovies => eachMovies.categoryId === 'ACTION',
  )
  const comedyMoviesList = moviesList.filter(
    eachMovies => eachMovies.categoryId === 'COMEDY',
  )
  return (
    <div className="app-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/prime-video-img.png"
        alt="prime video"
        className="prime-video-image"
      />
      <div className="movies-container">
        <h1>Action Movies</h1>
        <MoviesSlider moviesList={actionMoviesList} />
        <h1>Comedy Movies</h1>
        <MoviesSlider moviesList={comedyMoviesList} />
      </div>
    </div>
  )
}

export default PrimeVideo
