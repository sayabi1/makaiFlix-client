import React from 'react';
import Col from 'react-bootstrap/Col';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import{ MovieCard } from '../movie-card/movie-card';
import VisibilityFilterInput from '../visibility-filter-input/visibility-filter-input';

const mapStateToProps = state => {
    const { visibilityFilter } = state;
    return { visibilityFilter };
};

function MoviesList(props) {
    const { movies, visibilityFilter } = props;
    let filteredMovies = movies;
   console.log(props);


if (visibilityFilter !== '') {
    filteredMovies = movies.filter(m => m.Title.toLowerCase().includes(visibilityFilter.toLowerCase()));
}

if (!movies) return <div className='main-view'/>;

return (<>
   <Col md={12} style={{ margin: '1em'}}>
     <VisibilityFilterInput VisibilityFilter={visibilityFilter} />
    </Col>
    {filteredMovies.map(m => (
        <Col md={3} key={m._id}>
           <MovieCard movie={m} />
        </Col>
    ))}
</>
);
}

MoviesList.propTypes = {
    movies: PropTypes.arrayOf(
        PropTypes.shape({
            filter: PropTypes.func,

        })
    ),
    visibilityFilter: PropTypes.string,
}
export default connect(mapStateToProps)(MoviesList);