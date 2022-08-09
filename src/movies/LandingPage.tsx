import { useEffect, useState } from "react";
import { landingPageDTO } from "./movie.model";
import MoviesList from "./MoviesList";

export default function LandingPage(){
    const [movies, setMovies] = useState<landingPageDTO>({});
  useEffect(() => {
    const timerId = setTimeout(() => {
      setMovies({
        inTheaters:[{
          id: 1,
          title: 'Spider-Man: Far From Home',
          poster:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-4bmHg1MrW9IngESkTGAbOJFYeDGwpekNGnshvjDvTRLMdPAWWPxVlzii&s'
        },
        {
          id: 2,
          title: 'Spider-Man: Far From Home',
          poster:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-4bmHg1MrW9IngESkTGAbOJFYeDGwpekNGnshvjDvTRLMdPAWWPxVlzii&s'
        }
      ],
      upcomingReleases:[
        {
          id :3,
          title: 'Soul',
          poster: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-4bmHg1MrW9IngESkTGAbOJFYeDGwpekNGnshvjDvTRLMdPAWWPxVlzii&s'
        }
      ]
      
      })
    }, 1000);
      return () => clearTimeout(timerId);
    });
    return(
        <>
          <h3>In Theaters</h3>
          <MoviesList movies={movies.inTheaters}/>
          <h3>Upcoming Releases</h3>
          <MoviesList movies={movies.upcomingReleases}></MoviesList>
        </>
    )
}