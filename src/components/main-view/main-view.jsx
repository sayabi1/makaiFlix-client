import React from 'react';
import axios from 'axios';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

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
    getMovies(token) {
      axios.get('https://makai-flix-db.herokuapp.com/movies', {
        headers: { Authorization: `Bearer ${token}`}
      })
      .then(response => {
        // Assign the result to the state
        this.setState({
          movies: response.data
        });
      })
      .catch(function (error) {
        console.log(error);
      });
    }
    componentDidMount() {
      let accessToken = localStorage.getItem('token');
      if (accessToken !== null) {
        this.setState({
          user: localStorage.getItem('user')
        });
        this.getMovies(accessToken);
      }
    }
    setSelectedMovie(movie) {
        this.setState({
            selectedMovie: movie
        });
    }
    onLoggedIn(authData) {
      console.log(authData);
      this.setState({
        user: authData.user.Username
      });
    
      localStorage.setItem('token', authData.token);
      localStorage.setItem('user', authData.user.Username);
      this.getMovies(authData.token);
    }
    render() {
        const { movies, selectedMovie,user } = this.state;

        /* If there is no user, the loginView is rendered . If there is a user looged in, the user details are *passed as a prop to the LoginView*/
         if (!user) return <LoginView onLoggedIn={user => this.onLoggedIn(user)}/>
       // Before Movies have been loaded
        if (movies.length === 0) return <div className="main-view" />;
    
        return (
          <Row className="main-view justify-content-md-center">
            {selectedMovie
              ?(
                <Col md={8}>
                    <MovieView movie={selectedMovie} onBackClick={newSelectedMovie => { this.setSelectedMovie(newSelectedMovie);}} />
                </Col>
              )
              : movies.map(movie => (
                <Col md={3}>
                    <MovieCard key={movie._id} movie={movie} onMovieClick={newSelectedMovie => {this.setSelectedMovie(newSelectedMovie); }}/>
                </Col>
              ))
            }

          </Row>
        );
      }
    
    }