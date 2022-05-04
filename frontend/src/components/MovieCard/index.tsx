import { Movie } from 'types/movie';
import moment from 'moment'

type Props = {
    movie: Movie;
}

function MovieCard({ movie }: Props) {
    return (
        <div>
            <img className="dsmovie-movie-card-image" src={movie.image} alt={movie.name} />
            <div className="dsmovie-card-bottom-container">
                <h3>{movie.name}</h3>
                <div className="top">
                    R$
                    {movie.price}
                    <h3>{moment(movie.publicationHour).startOf('minutes').fromNow()}</h3>
                </div>

                <a href={movie.link}>
                    <div className="btn btn-primary dsmovie-btn">IR PARA LOJA</div>
                </a>
            </div>
        </div>
    );
}

export default MovieCard;