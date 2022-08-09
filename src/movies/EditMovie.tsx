import { actorMovieDTO } from "../actors/actors.model"
import { genreDTO } from "../genres/genres.model"
import { movieTheaterDTO } from "../moviestheaters/movieTheater.model"
import MovieForm from "./MovieForm"

export default function EditMovie(){
    
    const nonSelectedGenres : genreDTO[] = [{id: 2, name: 'Drama'}]
    const selectedGenres : genreDTO[] = [{id: 1, name: 'Comedy'}]
    const selectedActors: actorMovieDTO[] = [{
        id: 1, name: 'Felipe', character:'Gerald', picture: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Tom_Holland_by_Gage_Skidmore.jpg/255px-Tom_Holland_by_Gage_Skidmore.jpg'
    }]
    const nonSelectedMovieTheaters : movieTheaterDTO[] = 
        [{id: 2, name: 'Agora'}]
    const selectedMovieTheaters : movieTheaterDTO[] = 
        [{id: 1, name: 'Sambil'}]
    return(
        <>
        <h3>Edit Movie</h3>
        <MovieForm model={{title: 'Toy Story', inTheators: true, trailer: 'url',
        releaseDate: new Date('2019-01-01T00:00:00')}}
        onSubmit={values => console.log(values)} 
            nonselectedGenres={nonSelectedGenres}
            selectedGenres={selectedGenres}

            nonSelectedMovieTheaters={nonSelectedMovieTheaters}
            selectedMovieTheaters={selectedMovieTheaters}
            selectedActors={selectedActors}
        />
        </>
    )
}