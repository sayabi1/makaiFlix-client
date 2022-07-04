import React from 'react';
import { MovieCard } from '../movie-card/movie-card';
import {MovieView} from '../movie-view/movie-view';
export class MainView extends React.Component {
    constructor() {
        super();
        this.state = {
            movies: [
                {_id: 1, Titel: 'Inception', Description: 'A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O., but his tragic past may doom the project and his team to disaster.',Genre:'Science-Fiction,Action,Adventure',Director:'Christopher Nolan', ImagePath:'https://www.imdb.com/title/tt1375666/mediaviewer/rm3426651392/?ref_=tt_ov_i'},
                {_id: 2, Titel:'The Shawshank Redemption', Description: 'Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.',Genre:'Drama',Director:'Frank Darabont', ImagePath: 'https://www.imdb.com/title/tt0111161/mediaviewer/rm10105600/?ref_=tt_ov_i'},
                {_id: 3, Titel: 'Gladiator', Description: 'A former Roman General sets out to exact vengeance against the corrupt emperor who murdered his family and sent him into slavery.',Genre:'Action,Drama,Romance',Director:'Ridley Scott', ImagePath: 'https://www.imdb.com/title/tt0172495/mediaviewer/rm2442542592/?ref_=tt_ov_i'}
            ],
            selectedMovie: null
        };
    }
    setSelectedMovie(newSelectedMovie) {
        this.setState({
            selectedMovie: newSelectedMovie
        });
    }
    render() {
        const { movies, selectedMovie } = this.state;
    
    
        if (movies.length === 0) return <div className="main-view">The list is empty!</div>;
    
        return (
          <div className="main-view">
            {selectedMovie
              ? <MovieView movie={selectedMovie} onBackClick={newSelectedMovie => { this.setSelectedMovie(newSelectedMovie); }}/>
              : movies.map(movie => (
                <MovieCard key={movie._id} movie={movie} onMovieClick={(movie) => { this.setSelectedMovie(movie) }}/>
              ))
            }
          </div>
        );
      }
    
    }
      
      
