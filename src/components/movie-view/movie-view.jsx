import React from'react';
import PropTypes from 'prop-types';
export class MovieView extends React.Component {

    keypressCallback(event) {
        console.log(event.key);
    }

    componentDidMount() {
        document.addEventListener('keypress', this.keypressCallback);
    }
    compoundWillUnmount() {
        document.removeEventListener('keypress', this.keypressCallback);
    }
        
    

    render() {
        const {movie, onBackClick} = this.props;
        return ( <div className='movie-view'>
            <div className='movie-poster'>
                <img src={movie.ImagePath} />
            </div>
            <div className='movie-titel'>
                <span className='label'>Title:</span>
                <span className='value'>{movie.Title}</span>
            </div>
            <div className='movie-description'>
                <span className='label'>Description:</span>
                <span className='value'>{movie.Description}</span>
            </div>
            <div className='movie-genre'>
                <span className='label'>Genre:</span>
                <span className='value'>{movie.Genre.Name + '~' + movie.Genre.Description}</span>
            </div>
            <div className='movie-description'>
                <span className='label'>Director:</span>
                <span className='value'>{movie.Director.Name + '~' + movie.Director.Bio}</span>
            </div>
            <button onClick={() => {onBackClick(null); }}>Back</button>
        </div>
        );
    }
}