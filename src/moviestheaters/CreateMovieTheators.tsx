import { Link } from "react-router-dom";
import MovieTheaterForm from "./MovieTheaterForm";

export default function createMovieTheators(){
    return(
        <>
        <h3>create MovieTheators</h3>
        <MovieTheaterForm 
            model={{name: ''}}
            onSubmit={values => console.log(values)}
        />
        </>
    )
}