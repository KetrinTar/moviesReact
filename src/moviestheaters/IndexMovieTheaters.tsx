import { urlMovieTheaters } from "../endpoints";
import IndexEntity from "../utils/IndexEntity";
import { movieTheaterDTO } from "./movieTheater.model";

export default function IndexMoviesTheaters(){
    return (
       <IndexEntity<movieTheaterDTO>
            url={urlMovieTheaters} createUrl="movietheaters/create" title = "Movie Theaters"
            entityName="Movie Theater"
            >
                {(entitites, buttons) => <>
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        {entitites?.map(entity => <tr key={entity.id}>
                            <td>
                                {buttons(`movietheaters/edit/${entity.id}`, entity.id)}
                            </td>
                            <td>
                                {entity.name}
                            </td>
                        </tr>)}
                    </tbody>
                </>}
       </IndexEntity>
    )
}