import React from 'react';
import axios from 'axios';

import { LoginView } from '../login-view/login-view';
import { MovieCard } from '../movie-card/movie-card';
import {MovieView} from '../movie-view/movie-view';
export class MainView extends React.Component {
    constructor() {
        super();
        this.state = {
            movies: [],
            selectedMovie: null,
            user: null
        };
    }
    componentDidMount() {
      axios.get('https://makai-flix-db.herokuapp.com/movies')
      .then(response => {
        this.setState({
          movies: response.data
        });
      })
      .catch(error => {
        console.log(error);
      });
    }
    setSelectedMovie(newSelectedMovie) {
        this.setState({
            selectedMovie: newSelectedMovie
        });
    }
    render() {
        const { movies, selectedMovie } = this.state;

        /* If there is no user, the loginView is rendered . If there is a user looged in, the user details are *passed as a prop to the LoginView*/
        // if (!user) return <LoginView onLoggedIn={user => this.onLoggedIn(user)}/>
       // Before Movies have been loaded
        if (movies.length === 0) return <div className="main-view" />;
    
        return (
          <div className="main-view">
            { /* if the selected movies is not null , that the selected movie will be returned 
            , otherwise all *movies will be returned*/
            selectedMovie
              ? <MovieView movie={selectedMovie} onBackClick={newSelectedMovie => { this.setSelectedMovie(newSelectedMovie); }}/>
              : movies.map(movie => (
                <MovieCard key={movie._id} movie={movie} onMovieClick={(newSelectedMovie) => { this.setSelectedMovie(newSelectedMovie) }}/>
              ))
            }
          </div>
        );
      }
    
    }
      
      
