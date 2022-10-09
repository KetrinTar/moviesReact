import CreateActor from "./actors/CreateActor";
import EditActor from "./actors/EditActor";
import IndexActors from "./actors/indexActors";
import Login from "./auth/Login";
import Register from "./auth/Register";
import CreateGenre from "./genres/CreateGenre";
import EditGenre from "./genres/EditGenre";
import IndexGenres from "./genres/IndexGenres";
import CreateMovie from "./movies/CreateMovie";
import EditMovie from "./movies/EditMovie";
import FilterMovie from "./movies/FilterMovie";
import LandingPage from "./movies/LandingPage";
import MovieDetails from "./movies/MovieDetails";
import CreateMovieTheaters from "./moviestheaters/CreateMovieTheaters";
import editMovieTheaters from "./moviestheaters/EditMovieTheaters";
import IndexMoviesTheaters from "./moviestheaters/IndexMovieTheaters";
import RedirectToLandPage from "./utils/RedirectToLandingPage";

const routes = [
    {path: '/genres', component: IndexGenres, exact: true, isAdmin : true},
    {path: '/genres/create', component: CreateGenre, isAdmin : true},
    {path: '/genres/edit/:id(\\d+)', component: EditGenre, isAdmin : true},

    {path: '/actors', component: IndexActors, exact: true, isAdmin : true},
    {path: '/actors/create', component: CreateActor, isAdmin : true},
    {path: '/actors/edit/:id(\\d+)', component: EditActor, isAdmin : true},

    {path: '/movietheaters', component: IndexMoviesTheaters, exact: true, isAdmin : true},
    {path: '/movietheaters/create', component: CreateMovieTheaters, isAdmin : true},
    {path: '/movietheaters/edit/:id(\\d+)', component: editMovieTheaters, isAdmin : true},

    {path: '/movie/filter', component: FilterMovie},
    {path: '/movie/create', component: CreateMovie, isAdmin : true},
    {path: '/movie/edit/:id(\\d+)', component: EditMovie, isAdmin : true},
    {path: '/movie/:id(\\d+)', component: MovieDetails},

    {path: '/register', component: Register},
    {path: '/login', component: Login},

    {path: '/', component: LandingPage, exact : true},
    {path:'*', component: RedirectToLandPage}


];
export default routes;