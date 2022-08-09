import { Link } from "react-router-dom";

export default function IndexMoviesTheaters(){
    return (
        <>
        <h3>Actors</h3>
        <Link className="btn btn-primary" to="/movietheators/create">
            Movie Theator
        </Link>
        </>
    )
}