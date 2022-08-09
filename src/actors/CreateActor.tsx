import { Link } from "react-router-dom";
import ActorForm from "./ActorForm";

export default function createActor(){
    return(
        <>
        <h3>Create Actor</h3>
        <ActorForm model={{name: '', dateOfBirth: undefined}} 
            onSubmit={values => console.log(values)}
        />
        </>
    )
}