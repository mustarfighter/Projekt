
"use client"
import {useState} from 'react';
import {searchMovies} from '../services/movie.service';
import MovieCard from './MovieCard';
import SearchBar from './SearchBar';


<<<<<<< HEAD
const MovieSearch = ({handleSubmitButtonStyleChange}: {handleSubmitButtonStyleChange: () => void}) => {
    const [movies, setMovies] = useState([])
=======
const MovieSearch = () => {
    const [movies, setMovies] = useState([])
    
>>>>>>> ea5b53dfa40e3c052178c81f27c72d6ca3dd94f6

    const handleSearch = async(query: string) => {
      const results = await searchMovies(query);
      setMovies(results);
    }

    return (
        <div>
<<<<<<< HEAD
          <SearchBar onSearch={handleSearch} handleSubmitButtonStyleChange={handleSubmitButtonStyleChange}/>
=======
          <SearchBar onSearch={handleSearch} />
>>>>>>> ea5b53dfa40e3c052178c81f27c72d6ca3dd94f6
          <div className='grid 
                          grid-cols-1 
                          sm:grid-cols-2 
                          md:grid-cols-3 
                          lg:grid-cols-4
                          xl:grid-cols-5
                          gap-8 
                          mt-8'>
            {movies.map((movie:any) => (
              <MovieCard
                key={movie.id}
                title={movie.title}
                overview={movie.overview}
                posterPath={movie.poster_path}
              />
            ))}
          </div>

        </div>
  )
}

export default MovieSearch;