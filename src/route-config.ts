import CreateActor from "./actors/CreateActor";
import EditActor from "./actors/EditActor";
import IndexActors from "./actors/indexActors";
import CreateGenre from "./genres/CreateGenre";
import EditGenre from "./genres/EditGenre";
import IndexGenres from "./genres/IndexGenres";
import CreateMovie from "./movies/CreateMovie";
import EditMovie from "./movies/EditMovie";
import FilterMovie from "./movies/FilterMovie";
import LandingPage from "./movies/LandingPage";
import createMovieTheators from "./moviestheaters/CreateMovieTheators";
import editMovieTheators from "./moviestheaters/EditMovieTheators";
import IndexMoviesTheaters from "./moviestheaters/IndexMovieTheaters";
import RedirectToLandPage from "./utils/RedirectToLandingPage";

const routes = [
    {path: '/genres', component: IndexGenres, exact: true},
    {path: '/genres/create', component: CreateGenre},
    {path: '/genres/edit/:id(\\d+)', component: EditGenre},

    {path: '/actors', component: IndexActors, exact: true},
    {path: '/actors/create', component: CreateActor},
    {path: '/actors/edit/:id(\\d+)', component: EditActor},

    {path: '/movietheators', component: IndexMoviesTheaters, exact: true},
    {path: '/movietheators/create', component: createMovieTheators},
    {path: '/movietheators/edit/:id(\\d+)', component: editMovieTheators},

    {path: '/movie/filter', component: FilterMovie},
    {path: '/movie/create', component: CreateMovie},
    {path: '/movie/edit/:id(\\d+)', component: EditMovie},

    {path: '/', component: LandingPage, exact : true},
    {path:'*', component: RedirectToLandPage}


];
export default routes;