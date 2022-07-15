import React from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export class MovieCard extends React.Component {
    render() {
        const {movie, onMovieClick} = this.props
        return (
            <Card style={{margin:'.75rem'}}>
                <div style={{maxHeight:'20rem', overflow:'hidden'}}><Card.Img variant="top" src={movie.ImagePath}/></div>
                <Card.Body>
                    <Card.Title>{movie.Title}</Card.Title>
                    <Card.Text>{movie.Description}</Card.Text>
                    <Button onClick={() => onMovieClick(movie)} variant="link">Open</Button>
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
    onMovieClick: PropTypes.func.isRequired
};