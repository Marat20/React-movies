import React from 'react'
// import ReactDOM from 'react-dom'
import Movie from './Movie'

export default function Movies (props) {
    const {movies = []} = props;
    return (
        <div className='movies'>
            {
                movies.length ? movies.map(movie => {
                    return <Movie key={movie.imdbID} {...movie}/>
                }) : <h2>Movies aren't found</h2>
            }
        </div>
    )
}