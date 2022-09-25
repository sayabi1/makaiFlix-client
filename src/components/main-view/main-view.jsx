import React from 'react';
import axios from 'axios';
import {Row, Col} from 'react-bootstrap';

import { BrowserRouter as Router, Route, Redirect, Link } from 'react-router-dom';
import { connect } from 'react-redux';





//import {MoviesList} from '../movies-list/movies-list';
//0
import { setMovies, setUser } from '../../actions/actions';



import { Menubar}  from "../navbar/navbar";
import  LoginView  from "../login-view/login-view";
import { MovieCard } from "../movie-card/movie-card";
import  { MovieView } from "../movie-view/movie-view";
import  {DirectorView}  from "../director-view/director-view";
import { GenreView}  from "../genre-view/genre-view";
import  {RegistrationView}  from "../registration-view/registration-view";
import  {ProfileView } from "../profile-view/profile-view";
//import MoviesList from '../movies-list/movies-list';



//#2 export keyword removed from here

 class MainView extends React.Component {
    constructor() {
        super();
        // #3 movies state removed from here
        
       /* this.state = {
            user: null
        };*/
    } 
    
    getMovies(token) {
      axios.get('https://makai-flix-api.herokuapp.com/movies', {
        headers: { Authorization: `Bearer ${token}`}
      })
      .then(response => {
        // #4
        this.props.setMovies(response.data);
        
      })
      .catch(function (error) {
        console.log(error);
      });
    }
    componentDidMount() {
      let accessToken = localStorage.getItem('token');
      if (accessToken !== null) {
        this.props.setUser({
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
      this.props.setUser({
        user: authData.user.Username
      });
    
      localStorage.setItem('token', authData.token);
      localStorage.setItem('user', authData.user.Username);
      this.getMovies(authData.token);
    }
    onLoggedOut() {
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      this.setUser({
        user: null
      });
      window.open("/", "_self")
    }
    
  render() {
    //const { movies, user } = this.state;
    //5 movies is extracted from this.props rather than from the this.state
    //let {movies} = this.props;
    //let {user} = this.state
    let {movies, user} = this.props;
    //let localUser = localStorage.getItem('user')
    return (
      <Router>
        <Menubar user={user} />
        <Row className="main-view justify-content-md-center">
          <Route
            exact
            path="/"
            render={() => {
              if (!user)
                return (
                  <Col>
                    <LoginView
                      movies={movies}
                      onLoggedIn={(user) => this.onLoggedIn(user)}
                    />
                  </Col>
                );
              if (movies.length === 0) return <div className="main-view" />;
              return movies.map((m) => (
                <Col md={3} key={m._id}>
                  <MovieCard movie={m} />
                </Col>
              ));
            }}
          />

          <Route
            path="/register"
            render={() => {
              if (user) return <Redirect to="/" />;
              return (
                <Col lg={8} md={8}>
                  <RegistrationView />
                </Col>
              );
            }}
          />

          <Route
            path={`/users/${user}`}
            render={({ history }) => {
              //if (!user) return <Redirect to="/" />;
              return (
                <Col>
                  <ProfileView
                    user={user}
                    onBackClick={() => history.goBack()}
                    movies={movies}
                  />
                </Col>
              );
            }}
          />
          <Route
            path={`/user-update/${user}`}
            render={({ match, history }) => {
              if (!user) return <Redirect to="/" />;
              return (
                <Col>
                  <UserUpdate
                    user={user}
                    onBackClick={() => history.goBack()}
                  />
                </Col>
              );
            }}
          />

<Route
            path="/movies/:movieId"
            render={({ match, history }) => {
              if (!user)
                return (
                  <Col>
                    <LoginView onLoggedIn={(user) => this.onLoggedIn(user)} />
                  </Col>
                );
              if (movies.length === 0) return <div className="main-view" />;
              // #6 MoviesList instead of MovieView
              return (
                <Col md={8}>
                  <MovieView
                    movie={movies.find((m) => m._id === match.params.movieId)}
                    onBackClick={() => history.goBack()}
                  />
                </Col>
              );
                }}
          />

          <Route
            path="/directors/:name"
            render={({ match, history }) => {
              if (!user)
                return (
                  <Col>
                    <LoginView onLoggedIn={(user) => this.onLoggedIn(user)} />
                  </Col>
                );
              if (movies.length === 0) return <div className="main-view" />;
              return (
                <Col md={8}>
                  <DirectorView
                    director={
                      movies.find((m) => m.Director.Name === match.params.name)
                        .Director
                    }
                    onBackClick={() => history.goBack()}
                  />
                </Col>
              );
            }}
          />

          <Route
            path="/genres/:name"
            render={({ match, history }) => {
              if (!user)
                return (
                  <Col>
                    <LoginView onLoggedIn={(user) => this.onLoggedIn(user)} />
                  </Col>
                );
              if (movies.length === 0) return <div className="main-view" />;
              return (
                <Col md={8}>
                  <GenreView
                    genre={
                      movies.find((m) => m.Genre.Name === match.params.name)
                        .Genre
                    }
                    onBackClick={() => history.goBack()}
                  />
                </Col>
              );
            }}
          />
        </Row>
      </Router>
    );
  }
}
// #7 
let mapStateToProps = state => {
  return {
    movies: state.movies,
    user: state.user,
  };
};
// #8 
export default connect(mapStateToProps, {setMovies, setUser })(MainView);

   
  