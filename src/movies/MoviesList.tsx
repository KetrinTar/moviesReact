import { movieDTO } from "./movie.model"
import IndividualMovie from "./IndividualMovie";
import css from './MoviesList.module.css';
import Loading from "../utils/Loading";
import GenericList from "../utils/GenericList";

export default function MoviesList(props: moviesListProps){
    return <GenericList 
    loadingUI={<>Loading</>}
    list={props.movies}>
    
        <div className={css.div}>

        {props.movies?.map(movie => 
        <IndividualMovie{...movie} key={movie.id}/>)}
    </div> 
        
    </GenericList>
            
   
    
}
interface moviesListProps{
    movies?: movieDTO[];
}