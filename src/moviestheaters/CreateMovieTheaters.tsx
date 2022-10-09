import axios, { AxiosError } from "axios";
import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { urlMovieTheaters } from "../endpoints";
import DisplayErrors from "../utils/DisplayErrors";
import { movieTheaterCreationDTO } from "./movieTheater.model";
import MovieTheaterForm from "./MovieTheaterForm";



export default function CreateMovieTheaters(){

    const history = useHistory();
    const [error, setErrors] = useState<string[]>([]);

    async function create(movieTheater:movieTheaterCreationDTO) {
        try{
            await axios.post(urlMovieTheaters, movieTheater);
            history.push("/movietheaters")
        } catch (error) {
            const err = error as AxiosError
            setErrors(err.response?.data)            
        }
    }

    return(
        <>
        <h3>Create Movie Theaters</h3>
        <DisplayErrors errors={error} />
        <MovieTheaterForm 
            model={{name: ''}}
            onSubmit={async values => await create(values)}
        />
        </>
    )
}