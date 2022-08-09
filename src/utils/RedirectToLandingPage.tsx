import { Redirect } from "react-router-dom";

export default function RedirectToLandPage(){
    return<Redirect to={{pathname: '/'}}></Redirect>
}