import { useContext, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import AuthenticationContext from "./auth/AuthenticationContext";
import Authorized from "./auth/Authorized";
import { logout } from "./auth/handleJWT";
import Button from "./utils/Button";

export default function Menu() {

  const {update, claims} = useContext(AuthenticationContext);

  function getUserEmail(): string{
    return claims.filter(x => x.name === "email")[0]?.value;
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">
          React Movies
        </NavLink>
        <div className="collapse navbar-collapse"
        style={{display: 'flex', justifyContent: 'space-between'}}>
          <ul className="navbar-nav me-auto mb2 mb-lg-o">
            <li>
              <NavLink className="nav-link" to="/movie/filter">
                Movies Filter
              </NavLink>
            </li>
            <Authorized
            role="admin"
              authorized={
                <>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/genres">
                      Genres
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="nav-link" to="/actors">
                      Actors
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="nav-link" to="/movietheaters">
                      Movie Theaters
                    </NavLink>
                  </li>

                  <li>
                    <NavLink className="nav-link" to="/movie/create">
                      Movies Create
                    </NavLink>
                  </li>
                </>
              }
            />
            
          </ul>
          <div className="d-flex">
              <Authorized
                authorized={<>
                  <span className="nav-link">Hello, {getUserEmail()}</span>
                  <Button
                  onClick={() => {
                    logout();
                    update([]);
                  }}
                  className="nav-link btn btn-link"
                  >Log out</Button>
                </>}
                nonAuthorized={<>
                  <Link to="/register"
                  className="nav-link btn btn-link">Register</Link>
                  <Link to="/login"
                  className="nav-link btn btn-link">Login</Link>
                </>}
                />
            </div>
        </div>
      </div>
    </nav>
  );
}
