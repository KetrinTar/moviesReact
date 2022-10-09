import axios, { AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import Authorized from "../auth/Authorized";
import { urlMovies } from "../endpoints";
import AlertContext from "../utils/AlertContext";
import { landingPageDTO } from "./movie.model";
import MoviesList from "./MoviesList";

export default function LandingPage() {
  const [movies, setMovies] = useState<landingPageDTO>({});
  useEffect(() => {
    loadData();
  }, []);

  function loadData() {
    axios.get(urlMovies).then((response: AxiosResponse<landingPageDTO>) => {
      setMovies(response.data);
    });
  }

  return (
    <AlertContext.Provider
      value={() => {
        loadData();
      }}
    >
      

      <h3>In Theaters</h3>
      <MoviesList movies={movies.inTheaters} />
      <h3>Upcoming Releases</h3>
      <MoviesList movies={movies.upcomingRelease}></MoviesList>
    </AlertContext.Provider>
  );
}
