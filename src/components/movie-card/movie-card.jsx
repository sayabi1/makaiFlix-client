import React from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom"
import axios from 'axios';

export class MovieCard extends React.Component {
    addFavorite() {
        const token = localStorage.getItem("token");
        const user = localStorage.getItem("user");
        axios
          .post(`https://makai-flix-api.herokuapp.com/users/${user}/movies/${this.props.movie._id}`, {}, {
            headers: { Authorization: 'Bearer ' + token }
          })
            .then(response => {
              alert(`Added to Favorite List`)
            })
            .catch(function (error) {
              console.log(error);
            });
      };
    
      removeFavorite () {
        const token = localStorage.getItem("token");
        const user = localStorage.getItem("user");
        axios
          .delete(`https://makai-flix-api.herokuapp.com/users/${user}/movies/${this.props.movie._id}`, {
           headers: {
              Authorization: 'Bearer ' + token
            }
          })
            .then(response => {
              alert(`Deleted out of you Favorite List`)
            })
            .catch(function (error) {
              console.log(error);
            });
      };
    render() {
        const {movie, onMovieClick} = this.props
        return (
            <Card style={{margin:'.75rem'}}>
                <Card.Img variant="top" src={movie.ImagePath}/>
                <Card.Body>
                    <Card.Title>{movie.Title}</Card.Title>
                    <Card.Text className='description'>{movie.Description}</Card.Text>
                    <Card.Footer>
                        <Link to={`/movies/${movie._id}`}>
                            <Button className='open' variant="button">See More...</Button>
                            </Link>
                            <Button variant="outline-warning" value={movie._id} onClick={(e) => this.addFavorite(e, movie)}>Add to Favourites</Button>
                            <Button variant="outline-warning" value={movie._id} onClick={(e) => this.removeFavorite(e, movie)}>Delete</Button>
                    </Card.Footer>
                </Card.Body>
            </Card>
        );
    }
}

MovieCard.prototypes = {
    movie: PropTypes.shape({
        Title: PropTypes.string.isRequired,
        Description: PropTypes.string.isRequired,
        ImageURL: PropTypes.string.isRequired
    }).isRequired,
    onMovieClick: PropTypes.func,
};