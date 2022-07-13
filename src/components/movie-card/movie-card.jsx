import React from 'react';
import PropTypes from 'prop-types';

export class MovieCard extends React.Component {
    render() {
        const {movie, onMovieClick} = this.props
        return (
            <div onClick={() => onMovieClick(movie)} className="movie-card">{movie.Titel}</div>
        );
    }
}

MovieCard.prototypes = {
    movie: PropTypes.shape({
        Titel: PropTypes.string.isRequired,
        Description: PropTypes.string.isRequired,
        ImageURL: PropTypes.string.isRequired
    }).isRequired,
    onMovieClick: PropTypes.func.isRequired
};