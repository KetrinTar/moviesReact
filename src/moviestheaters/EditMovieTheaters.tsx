import { urlMovieTheaters } from "../endpoints";
import EditEntity from "../utils/EditEntity";
import { movieTheaterCreationDTO, movieTheaterDTO } from "./movieTheater.model";
import MovieTheaterForm from "./MovieTheaterForm";

export default function editMovieTheaters(){
    return(
        <EditEntity<movieTheaterCreationDTO, movieTheaterDTO>
            url={urlMovieTheaters} indexURL="/movietheaters" entityName="Movie Theater"
        >
            {(entity, edit) => 
                <MovieTheaterForm model={entity}
                onSubmit={async value => await edit(value)} />
            }
        </EditEntity>
    )
}