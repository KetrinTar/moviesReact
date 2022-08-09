import { NavLink } from "react-router-dom";

export default function Menu(){
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <NavLink className="navbar-brand" to="/">React Movies</NavLink>
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav me-auto mb2 mb-lg-o">
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/genres">
                                Genres
                            </NavLink>
                            
                        </li>
                        <li><NavLink className="nav-link" to="/actors">
                                Actors
                            </NavLink>
                            </li>
                            <li><NavLink className="nav-link" to="/movietheators">
                            Movie Theators
                            </NavLink>
                            </li>
                            <li><NavLink className="nav-link" to="/movie/filter">
                            Movies Filter
                            </NavLink></li>
                            <li><NavLink className="nav-link" to="/movie/create">
                            Movies Create
                            </NavLink></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}