import "./App.css";
import MoviesList from "./movies/MoviesList";
import { landingPageDTO } from "./movies/movie.model";
import { useEffect, useState } from "react";
import Button from "./utils/Button";
import Menu from "./Menu";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import IndexGenres from "./genres/IndexGenres";
import routes from "./route-config";
import configureValidations from "./Validations";
import { claim } from "./auth/auth.model";
import AuthenticationContext from "./auth/AuthenticationContext";
import { getClaims } from "./auth/handleJWT";
import configureInterceptor from "./utils/httpInterceptors";
configureValidations();
configureInterceptor();
function App() {
  const [claims, setClaims] = useState<claim[]>([
    {name: 'email', value: '@com'},
    {name: 'role', value: '@admin'}
  ]);

  useEffect(() => {
    setClaims(getClaims())
  }, []);

  function isAdmin(){
    return claims.findIndex(claim => claim.name === 'role' && claim.value === 'admin') > -1;
  }
/*({route.isAdmin && !isAdmin() ? <>
                You are not allowed to see this page
                </>:)
}
*/
  return (
    <BrowserRouter>
      <AuthenticationContext.Provider value={{ claims, update: setClaims }}>
        <Menu></Menu>
        <div className="container">
          <Switch>
            {routes.map((route) => (
              <Route key={route.path} path={route.path} exact={route.exact}>
                 <route.component />
                
              </Route>
            ))}
          </Switch>
        </div>
        <footer className="bd-footer py-5 bg-light">
          <div className="container">
            React Movies {new Date().getFullYear().toString()}
          </div>
        </footer>
      </AuthenticationContext.Provider>
    </BrowserRouter>
  );
}

export default App;
